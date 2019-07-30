import axios from 'axios';
const API = 'http://localhost:3000/API/search/';

export const getResults = data => {
  return axios.post(API, data);
};
