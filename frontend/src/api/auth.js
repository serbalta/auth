// src/api/auth.js
import axios from "axios";

const API_URL = `http://${process.env.APP_SERVER_IP}:8080/api/auth/`;

export const registerUser = (userData) => {
  return axios.post(API_URL + "register", userData);
};

export const loginUser = (userData) => {
  return axios.post(API_URL + "login", userData);
};
