# Realtime Weather Application 🌤️

A lightweight, modern, and highly responsive web application designed to fetch real-time weather updates worldwide using the **OpenWeatherMap API**. Built using **Python (Flask)** for the backend and **Vanilla JavaScript & CSS** for a stylish glassmorphism user interface.

![Python](https://img.shields.io/badge/Python-3.x-blue?style=flat&logo=python)
![Flask](https://img.shields.io/badge/Framework-Flask-green?style=flat&logo=flask)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Setup Instructions
1. Get a free API Key from OpenWeatherMap (https://openweathermap.org/api).
2. Insert your API key in `static/js/main.js`.
3. Run `pip install -r requirements.txt`.
4. Run `python app.py`.
5. Open browser: `http://127.0.0.1:5000`

---

## ✨ Features

- 🌡️ **Live Weather Data:** Displays dynamic temperature, humidity, and wind speed.
- 🔍 **Instant City Search:** Fetch real-time weather details for any city in the world.
- 🎨 **Glassmorphism UI:** Clean, responsive, and aesthetically pleasing design.
- ⚡ **Lightweight & Fast:** Pure JavaScript asynchronous fetch requests without heavy client-side frameworks.

---


## 📁 Project Structure

```text
weather-app/
│
├── static/
│   ├── css/
│   │   └── style.css       # Custom styles & layout
│   └── js/
│       └── main.js         # API integration & DOM operations
├── templates/
│   └── index.html          # Main HTML structure
├── app.py                  # Flask server configuration
├── requirements.txt        # Required Python packages
├── .gitignore              # Files ignored by Git
└── README.md               # Project documentation
