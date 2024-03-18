import axios from "axios";

const baseURL = "https://steamapi-production.up.railway.app/";

export const Signin = async (body) => {
  try {
    const response = await axios.post(`${baseURL}auth/login`, body);
    return response;
  } catch (error) {
    return error;
  }
};
