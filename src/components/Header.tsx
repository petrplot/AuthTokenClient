import {observer} from "mobx-react-lite";
import React, {FC, useContext, useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import {Context} from "..";

const Header: FC = () => {
  console.log("rendr header");

  const nav = useNavigate();

  const {userStore, contactStore} = useContext(Context);

  const logOut = () => {
    console.log("выход");
    userStore.logout();
    contactStore.contacts = [];
    nav("/auth");
  };

  return (
    <div>
      <Link to={"/"}>главная</Link>

      {userStore.isAuth? "":<Link to={"/auth"}>войти</Link>}

      <button onClick={logOut}>выйти</button>
    </div>
  );
};

export default observer(Header);
