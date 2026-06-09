# Simple Weather App

A clean, lightweight weather dashboard with a Tailwind-styled frontend and an Express backend. The app loads countries and cities dynamically, then retrieves live weather data from Open-Meteo using latitude and longitude.

## Features

- Country list powered by `country-state-city`
- City/state dropdown updates dynamically based on selected country
- Live weather lookup via Open-Meteo API
- Responsive UI styled with Tailwind CSS
- Vanilla JavaScript frontend with minimal dependencies
- Clear error handling for loading and form state

## Tech Stack

- Backend: `Node.js`, `Express`, `axios`, `country-state-city`
- Frontend: `HTML`, `JavaScript`, `Tailwind CSS`
- Weather API: `Open-Meteo`

## Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd WeatherApp
npm install
```

## Run Locally

```bash
npm run dev
```

Then open `frontend/index.html` in your browser.

## API Endpoints

- `GET /api/countries`
  - Returns a list of countries with name and ISO code.

- `GET /api/cities?countryCode=<code>`
  - Returns cities/states for the selected country.

- `GET /api/weather?city=<city>&country=<code>&lat=<lat>&lon=<lon>`
  - Returns current weather data:
    - `city`
    - `country`
    - `tempC`
    - `windKmh`
    - `description`

## Project Structure

```
WeatherApp/
├── backend/
│   ├── controllers/
│   │   ├── cityController.js
│   │   ├── countryController.js
│   │   └── weatherController.js
│   ├── routes/
│   │   ├── cityRoutes.js
│   │   ├── countryRoutes.js
│   │   └── weatherRoutes.js
│   ├── services/
│   │   ├── cityService.js
│   │   └── weatherService.js
│   └── server.js
├── frontend/
│   ├── index.html
│   └── script.js
├── package.json
└── README.md
```

## Notes

- City/state data is obtained from the `country-state-city` package.
- Weather results are based on latitude and longitude for accuracy.
- CORS is enabled so the frontend can fetch backend APIs at `localhost:3000`.

## Future Improvements

- Add weather icons and hourly forecast
- Support search history or favorites
- Improve mobile layout and animations
- Deploy backend and frontend together as a bundled app
