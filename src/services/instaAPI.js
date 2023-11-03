import axios from "axios";

export const getTrends = async () => {
  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const FINAL_URL = `${BASE_URL}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`;
  const result = await axios(FINAL_URL);
  console.log(result.data.results);
  return result.data.results ;
};