import axios from "axios";

const BASE_URL = "https://weather-app-backend-clux.onrender.com/weather";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { city: city }   // must match backend
    });

    console.log("FULL RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
};
