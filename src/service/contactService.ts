import {AxiosResponse} from "axios";
import _api from "../http/index";
import {IContact} from "../models/IContact";

export default class ContactService {
  static async createContact(
      name: string,
      phone: string,
      userId: number,
  ): Promise<AxiosResponse<IContact>> {
    return _api.post<IContact>("/contacts", {name, phone, userId});
  }

  static async updateContact(
      name: string,
      phone: string,
      id: number,
  ): Promise<AxiosResponse<IContact>> {
    return _api.put<IContact>(`/contacts/${id}`, {name, phone});
  }

  static async getContacts(userId: number): Promise<AxiosResponse<IContact[]>> {
    return _api.get<IContact[]>(`/contacts/?userId=${userId}`);
  }

  static async deleteContact(id: number):Promise<AxiosResponse> {
    return _api.delete(`/contacts/${id}`);
  }
}
