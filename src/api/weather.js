import axios from "axios";

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//console.log("API .KEY:", process.env.REACT_APP_WEATHER_API_KEY);

// Endpoint 
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        key: process.env.REACT_APP_WEATHER_API_KEY ,
        units: "metric",  // "metric" for °C
        aqi:"no" 
      },
    });

    console.log("FULL RESPONSE:", response.data); // debug

    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
  

};
