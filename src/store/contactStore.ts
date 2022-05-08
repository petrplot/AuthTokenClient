
import {makeAutoObservable} from "mobx";
import ContactService from "../service/contactService";
import {IContact} from "./../models/IContact";

export default class ContactStore {
  contacts: IContact[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setContact(contact: IContact) {
    this.contacts.push(contact);
  }

  setContacts(contacts: IContact[]) {
    this.contacts = [...this.contacts, ...contacts];
  }

  async createContact(name: string, phone: string, userId: number) {
    try {
      const res = await ContactService.createContact(name, phone, userId);
      console.log("контакт создан:", res.data);
      this.setContact(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  async updateContact(name: string, phone: string, id: number) {
    try {
      const res = await ContactService.updateContact(name, phone, id);
      this.contacts = this.contacts.map((contact) => {
        return contact.id === id ? contact = res.data : contact;
      });
      console.log("контакт изменен:", res);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteContact(id: number) {
    try {
      const res = await ContactService.deleteContact(id);
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      console.log("контакт удален", res);
    } catch (e) {
      console.log(e);
    }
  }

  async getContacts(userId: number) {
    try {
      const res = await ContactService.getContacts(userId);
      console.log("список контактов", res.data);
      this.setContacts(res.data);
    } catch (e) {
      console.log(e);
    }
  }
}
