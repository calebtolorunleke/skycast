import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "d55d9188451b3c184ef4df4544bd4c3f";

export const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};