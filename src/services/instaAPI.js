// import axios from "axios";

// export const getTrends = async () => {
//   const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
//   const FINAL_URL = `${BASE_URL}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`;
//   const result = await axios(FINAL_URL);
//   console.log(result.data.results);
//   return result.data.results ;
// };

import axios from 'axios';

const API_BASE_URL = 'https://instacrameapi-production.up.railway.app/api';

const ApiService = {
  getAllGuys: async () => {
    return axios.get(`${API_BASE_URL}/guy`);
  },

  getGuyById: async (id) => {
    return axios.get(`${API_BASE_URL}/guy/${id}`);
  },

  createGuy: async (data) => {
    return axios.post(`${API_BASE_URL}/guys`, { data });
  },

  updateGuy: async (id, data) => {
    return axios.put(`${API_BASE_URL}/guy/${id}`, { data });
  },

  deleteGuy: async (id) => {
    return axios.delete(`${API_BASE_URL}/guy/${id}`);
  },

  getAllPosts: async () => {
    return axios.get(`${API_BASE_URL}/post`);
  },

  getPostById: async (id) => {
    return axios.get(`${API_BASE_URL}/post/${id}`);
  },

  createPost: async (data) => {
    return axios.post(`${API_BASE_URL}/posts`, { data });
  },

  updatePost: async (id, data) => {
    return axios.put(`${API_BASE_URL}/post/${id}`, { data });
  },

  deletePost: async (id) => {
    return axios.delete(`${API_BASE_URL}/post/${id}`);
  }
};

export default ApiService;