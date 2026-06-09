import { Country } from 'country-state-city';

export function getCountries(req, res) {
    const countries = Country.getAllCountries().map((country) => ({
        name: country.name,
        code: country.isoCode
    }));
    res.json(countries);
}