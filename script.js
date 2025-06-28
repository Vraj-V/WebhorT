window.onload = function () {
  let url = 'https://api.weatherapi.com/v1/current.json?key=8e5445931a464c1f8e7111542252806&q=&aqi=yes';

  let Name = document.getElementById('name');
  let DateTime = document.getElementById('date');
  let Icon = document.getElementById('icon');
  let Condition = document.getElementById('condition');
  let Humidity = document.getElementById('humidity');
  let Country = document.getElementById('country');
  let Region = document.getElementById('region');
  let Lat = document.getElementById('lat');
  let Lon = document.getElementById('lon');
  let Wind = document.getElementById('wind_mph');
  let Output = document.getElementById('output');
  let Span = document.getElementsByTagName('span');

  window.weatherShow = function () {
    Output.style.display = "block";

    for (let i = 0; i < Span.length; i++) {
      Span[i].style.color = 'red';
      Span[i].style.fontSize = '18px';
      Span[i].style.fontWeight = '600';
    }

    DateTime.style.fontSize = "18px";
    DateTime.style.color = "red";
    DateTime.style.fontWeight = "700";

    let city = document.getElementById('input');
    if (!city.value.trim()) {
      alert("Please enter a city name.");
      return;
    }

    let query = url.replace('q=', 'q=' + city.value.trim());
    city.value = '';

    fetch(query)
      .then((data) => data.json())
      .then((data) => {
        Name.innerHTML = `<h1>${data.location.name}</h1>`;
        Country.innerHTML = data.location.country;
        Region.innerHTML = data.location.region;
        Lat.innerHTML = data.location.lat.toFixed(2);
        Lon.innerHTML = data.location.lon.toFixed(2);
        Condition.innerHTML = data.current.condition.text;
        Humidity.innerHTML = data.current.humidity + "%";
        Wind.innerHTML = data.current.wind_mph + " mph";
        Icon.src = "https:" + data.current.condition.icon;

        let currentTime = new Date(data.location.localtime);
        let interval = setInterval(() => {
          currentTime.setSeconds(currentTime.getSeconds() + 1);
          const timeStr = currentTime.toLocaleString();
          DateTime.innerHTML = timeStr;
        }, 1000);

        DateTime.onclick = () => {
          clearInterval(interval);
          DateTime.innerHTML = `${data.location.name}, ${data.location.country}`;
        };
      })
      .catch(err => {
        console.error(err);
        Output.innerText = "Error: Unable to fetch weather.";
      });
  };
};
