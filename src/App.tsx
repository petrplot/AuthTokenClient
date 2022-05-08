/* eslint-disable no-undef */
import React, {FC, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import st from "./App.module.scss";

interface IProp{
  children:JSX.Element
}

const App:FC<IProp> =({children})=> {
  console.log("render App");

  const nav = useNavigate();
  const {userStore, contactStore} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      userStore.checkAuth();
      nav("/");
    }
  }, []);

  useEffect(()=>{
    if (userStore.isAuth) {
      const userId = userStore.user.id;
      contactStore.getContacts(userId);
    }
  }, [userStore.isAuth]);

  return (
    <div className={st.app}>
      <Header />
      <h1>
        {userStore.isAuth ? `Пользователь: ${userStore.user.email} авторизован ` : "авторизуйтесь"}
      </h1>
      <hr />
      {children}
      <Footer />
    </div>
  );
};

export default observer(App);
