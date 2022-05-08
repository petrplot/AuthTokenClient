import axios from "axios";
import {AuthResponse} from "../models/authResponse";

export const URL = "http://localhost:5000/api";

const _api = axios.create({
  withCredentials: true,
  baseURL: URL,
});

_api.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

_api.interceptors.response.use(
    (config) => {
      return config;
    },

    async (error) => {
      const reqNext = error.config;
      if (error.response.status == 401 && error.config && !error.config._isRetry) {
        reqNext._isRetry = true;
        try {
          const res = await axios.get<AuthResponse>(`${URL}/user/re`, {withCredentials: true});
          localStorage.setItem("token", res.data.accessToken);
          return _api.request(reqNext);
        } catch (e) {
          console.log("респонс интерцептор - пользователь не автаризован");
        }
      }
      throw error;
    },
);

export default _api;
