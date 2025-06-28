🌤️ Weather App

A simple and responsive weather app built using **HTML**, **CSS**, and **JavaScript**. This app fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) and displays key details such as temperature, humidity, wind, and more.

---

## 🔍 Features

- 🌐 Get real-time weather by city name
- 📍 Displays:
  - City, Country, Region
  - Temperature & Conditions
  - Humidity, Wind, Coordinates
  - Weather icon
  - Local time with live update
- 🎨 Clean UI with responsive design
- 📱 Mobile-friendly with `@media` support
- 🎥 Optional video background for enhanced visuals

---

## 🛠️ Tech Stack

- HTML
- CSS (with Media Queries)
- Vanilla JavaScript
- WeatherAPI (REST API)

---

## 📦 How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/weather-app.git

Open index.html in your browser.

Enter any city name and click Search City.

View live weather details instantly.

🔑 API Key Setup
This project uses https://weatherapi.com.
You need an API key to fetch weather data:

Register on weatherapi.com

Replace the API key inside script.js:

let url = 'http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=&aqi=yes';
