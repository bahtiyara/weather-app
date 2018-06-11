import axios from 'axios';

const API_KEY = '315633dd82342d9594cb1ed2dc4f63a7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?lang=zh_cn&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},cn`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}