
const baseUrl = (path) => {
    return "https://de1.api.radio-browser.info/json/" + path
}

export const getCountries = async () => {
    const res = await fetch(baseUrl(`countries?hidebroken=true`));
    return res.json();
}

export const getStations = async (country = 'india', limit = 10, offset = 0, name = '') => {
    const res = await fetch(baseUrl(`stations/search?country=${country}&hidebroken=true&order=votes&reverse=true&limit=${limit}&offset=${offset}&name=${name}`));
    return res.json();
}