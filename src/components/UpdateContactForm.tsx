import {observer} from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import {Context} from "..";
import st from "./UpdateContactForm.module.scss";

interface propContact {
    contact: {
      id: number;
      name: string;
      phone: string;
    };
    active:boolean,
    setActive:(bool:boolean)=>void
  }

const UpdateContactForm: FC<propContact> = ({contact, active, setActive}) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const {contactStore} = useContext(Context);
  const id = contact.id;

  console.log("rendr updform");

  const updateContact = () => {
    contactStore.updateContact(name, phone, id);
    console.log("контакт изменен");
    setActive(false);
  };

  return (
    <div className={active?`${st.modal} ${st.active}`: st.modal} onClick={() => setActive(false)}>
      <div className={st.content} onClick={(e) => e.stopPropagation()}>
        <div>
          <h1>изменить контакт</h1>
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
          <button onClick={updateContact}>отправить</button>
        </div>
      </div>
    </div>
  );
};

export default observer(UpdateContactForm);
