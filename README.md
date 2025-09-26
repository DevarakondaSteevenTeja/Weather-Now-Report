# Weather-Now-Report

🌤️ Jamie's QuickCheck Weather Application
This is a single-page weather application designed for a quick and clear check of current conditions and a short-term forecast. It was built using React and styled with pure CSS (no Tailwind required) for easy deployment in environments like CodeSandbox.

Key Features
City Search: Allows users to input any city name to fetch weather data.

Current Conditions: Displays temperature, 'feels like' temperature, and a weather description with corresponding emojis.

QuickCheck Details: Provides essential outdoor details like Wind Speed, Wind Direction, Precipitation, and Humidity.

Hourly Forecast: Shows the forecast for the next 8 hours to plan immediate activities.

Clean Styling: Uses standard CSS for a responsive, clean, and easily maintainable design.

📁 Project Structure
The application is composed of three primary files, which is why it was easy to copy and paste into your CodeSandbox template:

File Name	Role	Description
src/App.tsx	Main Logic (JSX/TSX)	Contains all React components, state management (useState), API fetching logic (fetch), and utility functions for weather codes and wind direction. All styling is applied using standard className attributes.
src/styles.css	Styling (CSS)	A completely custom CSS file containing all style definitions. This file ensures the application has a clean, functional look without requiring external frameworks like Tailwind CSS.
src/index.tsx	Entry Point	The root file that mounts the <App /> component to the DOM and, crucially, imports the global CSS file (./styles.css).
vite.config.js	Vite Fix	A configuration file added specifically to resolve the "Blocked request" error in CodeSandbox previews by allowing the dynamic CodeSandbox host (.csb.app).

Export to Sheets
🛠️ Data & API Details
The application uses the following APIs, all fetched via the native fetch API in App.tsx:

Geocoding API (Open-Meteo):

Purpose: Converts the user-inputted city name (e.g., "London") into geographic coordinates (Latitude and Longitude).

Weather Forecast API (Open-Meteo):

Purpose: Fetches current and hourly weather data using the coordinates obtained in Step 1.

Parameters Used: The API is configured to return data in Fahrenheit (temperature_unit=fahrenheit) and MPH (wind_speed_unit=mph) for current data points like:

temperature_2m

apparent_temperature (Feels Like)

weather_code (for icons/description)

wind_speed_10m

wind_direction_10m

🚀 How to Run in CodeSandbox
This application is ready to run immediately in a standard React + TypeScript (Vite) template:

Create Sandbox: Start with the standard React or React + TypeScript template.

Paste Code: Copy the contents into the corresponding files (App.tsx, styles.css).

Fix Host Error (Crucial): To prevent the "Blocked request" error common in CodeSandbox:

Create a file named vite.config.js in the root directory.

Paste the following configuration:

JavaScript

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['.csb.app'], 
  },
});
Enjoy! The application will compile and display in the preview pane.
