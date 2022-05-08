import {observer} from "mobx-react-lite";
import React, {FC, useCallback, useContext, useEffect, useState} from "react";
import {Context} from "..";
import {IContact} from "../models/IContact";
import AddContactForm from "./AddContactForm";
import Contact from "./Contact";

const ContactList: FC = () => {
  console.log("rendr contList");

  const {contactStore, userStore} = useContext(Context);

  console.log();

  return (
    <>
      <AddContactForm />
      {contactStore.contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </>
  );
};

export default observer(ContactList);
