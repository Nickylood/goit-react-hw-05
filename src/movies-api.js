import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const TMDB_ACCES_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzg2ZWJjYjIyMjViMDgwNzIwYzI5NGQzY2ExZjZmNiIsInN1YiI6IjY1ZTllYThhYWY5NTkwMDE4NGRkN2Y4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vq1VVWqFCr6fQYZgQlBRANnxH7lAGJeBonETDN6Ox14";

const pathname = "/trending/movie/day";

const options = {
  headers: {
    Authorization: `Bearer ${TMDB_ACCES_TOKEN}`,
  },
};

export const getMovies = async () => {
  try {
    const response = await axios.get(pathname, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by Id", error);
    throw error;
  }
};

export const getCredits = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching credits", error);
    throw error;
  }
};

export const getReviews = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`/search/movie?query=${query}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies by query", error);
    throw error;
  }
};
