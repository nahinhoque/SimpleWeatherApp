import { getCurrentWeather, describeWeather } from "../services/weatherService.js";

async function getWeatherByCity(req, res) {
    const city = req.query.city;
    const country = req.query.country;
    const lat = req.query.lat;
    const lon = req.query.lon || req.query.long;

    if (!lat || !lon) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    try {
        const weather = await getCurrentWeather(lat, lon);

        if (!weather) {
            return res.status(502).json({ message: "Unable to retrieve weather data" });
        }

        return res.json({
            city: city,
            country: country,
            tempC: Math.round(weather.temperature),
            windKmh: weather.windspeed,
            description: describeWeather(weather.weathercode),
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || "Internal server error" });
    }
}

export default getWeatherByCity;
