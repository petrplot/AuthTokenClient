import {observer} from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import {Context} from "..";

const AddContactForm: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const {userStore, contactStore} = useContext(Context);
  const userId = userStore.user.id;

  console.log("render addform");

  const createContact = () => {
    try {
      if (userStore.isAuth) {
        contactStore.createContact(name, phone, userId);
        setName(""),
        setPhone("");
        console.log("контакт создан");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <h1>Создать контакт</h1>
      </div>
      <div>
        <input
          placeholder="введте имя контакта"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="введите номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={createContact}>отправить</button>
      </div>
    </div>
  );
};

export default observer(AddContactForm);
