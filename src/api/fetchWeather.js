import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '54f5d77c61f7b7d7da7d2c41a2956900';

export const fetchWeather = async (query) => {
    console.log(query)
    const data = axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })

    return data
}