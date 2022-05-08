import {IUser} from "./../models/IUser";
import _api from "../http/index";
import {AxiosResponse} from "axios";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return _api.get<IUser[]>("/user");
  }
}
