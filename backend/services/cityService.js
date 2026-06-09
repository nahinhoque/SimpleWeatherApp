import { State } from "country-state-city";

export async function getCitiesByCountry(countryCode) {
    const states = State.getStatesOfCountry(countryCode);
    return states.filter((state) => !state.name.includes("Division")).map((state) => ({
        name: state.name.replace("District", "").trim(),
        code: state.isoCode,
        lat: state.latitude,
        lon: state.longitude
    }));
}