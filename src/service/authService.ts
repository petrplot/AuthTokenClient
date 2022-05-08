import {AuthResponse} from "../models/authResponse";
import _api from "../http/index";
import {AxiosResponse} from "axios";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return _api.post<AuthResponse>("/user/login", {email, password});
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return _api.post<AuthResponse>("/user/reg", {email, password});
  }

  static async logout(): Promise<void> {
    return _api.post("/user/logout");
  }
}
