import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});


export const apifetcher = async (url) => {
  const response = await apiClient.get(url);
  return response.data;
};

export const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;