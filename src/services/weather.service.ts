import axios from "axios";
import { WeatherForcast } from "../type";

export function forecast() {
  return axios.get<WeatherForcast>(
    "https://api.weather.gov/gridpoints/DTX/65,33/forecast"
  );
}
