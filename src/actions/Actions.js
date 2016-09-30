import axios from 'axios';

const API_KEY = '16502f1a42454ffef3dedb264237680c';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const FetchWeather = (city) => {
  const URL = `${API_URL}&q=${city}&units=metric`;
  const REQUEST = axios.get(URL);

  return {
      type: FETCH_WEATHER,
      payload: REQUEST
  };
};
