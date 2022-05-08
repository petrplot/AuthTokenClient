import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/authService";
import axios from "axios";
import {URL} from "../http";
import {AuthResponse} from "../models/authResponse";
import ContactStore from "./contactStore";

export default class UserStore {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const res = await AuthService.login(email, password);
      console.log("login:", res.data.user);
      localStorage.setItem("token", res.data.accessToken);
      this.setIsAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(email: string, password: string) {
    try {
      const res = await AuthService.register(email, password);
      console.log("reg:", res);
      localStorage.setItem("token", res.data.accessToken);
      this.setIsAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setIsAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get<AuthResponse>(`${URL}/user/re`, {withCredentials: true});
      console.log("check:", res);
      localStorage.setItem("token", res.data.accessToken);
      this.setIsAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e);
    }
  }
}
