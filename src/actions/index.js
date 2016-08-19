import axios from 'axios';

const API_KEY = 'c018a2653dec445d95faeae0fdf4f844';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;
export const FETCH_WEATHER ='FETCH_WEATHER';


export function fetchWeather(city){
  const url =`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // axios is a library only for making calls

// we are returning a promise but its been taken care by redux-promise and returns the actual payload
console.log('Request',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
