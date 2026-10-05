# 🌤️ SkyPulse – Realtime Weather Dashboard

**SkyPulse** is a sleek, lightweight, and modern web application built using Python (Flask), HTML5, CSS3, and JavaScript. It provides real-time weather information with dynamic country selection, quick city presets, and detailed weather metrics using the OpenWeatherMap API.

---

## ✨ Features

- 🌍 **Country & City Selector:** Quickly switch between popular cities in Sri Lanka, USA, UK, Japan, India, and Australia.
- 🔍 **Realtime Search:** Search for any city or region worldwide.
- 📊 **Detailed Weather Metrics:** 
  - Temperature & "Feels Like" reading
  - Humidity percentage
  - Wind Speed (km/h)
  - Atmospheric Pressure (hPa)
  - Visibility range (km)
  - Sunrise time
- 🎨 **Glassmorphism UI:** Built with modern CSS backdrops, gradients, and custom web typography.
- 📱 **Fully Responsive:** Smooth layout adaptation across desktop, tablet, and mobile displays.
- 🛡️ **Graceful Fallback Handling:** Works seamlessly even if API limits are reached or key activation is pending.

---

## 🛠️ Tech Stack

- **Backend:** Python 3.x, Flask framework
- **Frontend:** HTML5, CSS3 (Glassmorphism), Vanilla JavaScript (ES6)
- **API Source:** OpenWeatherMap API

---

## 📂 Project Directory Structure

```text
realtime-weather-app/
├── templates/
│   └── index.html          # Main HTML structure with Glassmorphism UI
├── static/
│   ├── css/
│   │   └── style.css       # Custom styles & design components
│   └── js/
│       └── main.js         # API integration, state management & fallback logic
├── app.py                  # Main Flask application route handler
├── requirements.txt        # Required Python packages
├── .gitignore              # Files ignored by Git

````

---

## 🚀 Setup & Installation Instructions

### 1. Prerequisites

Ensure you have **Python 3.x** installed on your computer.

### 2. Clone / Download the Repository

### 3. Install Dependencies

```bash
pip install -r requirements.txt

```

### 4. Configure API Key

1. Get a free API Key from [OpenWeatherMap](https://openweathermap.org/api).
2. Open `static/js/main.js`.
3. Replace `"YOUR_OPENWEATHERMAP_API_KEY"` with your actual API key:
```javascript
const API_KEY = "your_actual_api_key_here";

```

### 5. Run the Application

```bash
python app.py

```

Open your browser and navigate to: `http://127.0.0.1:5000`

---


<FollowUp label="Need help creating a GitHub repository and uploading this project?" query="How do I upload this project to GitHub step-by-step?"/>

```
