import {observer} from "mobx-react-lite";
import React, {FC, useContext, useState} from "react";
import {Context} from "..";
import UpdateContactForm from "./UpdateContactForm";

interface propContact {
  contact: {
    id: number;
    name: string;
    phone: string;
  };
}


const Contact: FC<propContact> = ({contact}) => {
  const [modActive, setModActive] = useState(false);

  const {contactStore} = useContext(Context);

  const removeContact = () => {
    contactStore.deleteContact(contact.id);
    console.log("контакт удален");
  };

  console.log("rendr contact");


  return (
    <div>
      <p>Имя: {contact.name} </p>
      <p>Телефон: {contact.phone}</p>
      <button onClick={removeContact}>удалить</button>
      <button onClick={()=>setModActive(true)}>изменить</button>
      <UpdateContactForm active={modActive} setActive={setModActive} contact={contact}/>
    </div>
  );
};

export default observer(Contact);
