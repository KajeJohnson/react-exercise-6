import axios from "axios";

export default function fetchAllQuotes() {
  return axios.get("https://grandcircusco.github.io/demo-apis/quotes.json");
}
