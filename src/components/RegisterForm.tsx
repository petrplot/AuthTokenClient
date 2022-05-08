import {observer} from "mobx-react-lite";
import React, {FC, useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Context} from "..";
import st from "./RegisterForm.module.scss";

interface propForm {
  changeReg: (bool: boolean) => void;
}

const RegisterForm: FC<propForm> = ({changeReg}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userStore} = useContext(Context);
  const nav = useNavigate();

  console.log("rendr regform");

  useEffect(() => {
    if (userStore.isAuth) {
      nav("/");
    }
  }, [userStore.isAuth, nav]);

  return (
    <div>
      <div>
        <h1>Регистрация</h1>
      </div>
      <div className={st.form}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            userStore.registration(email, password);
            setEmail("");
            setPassword("");
          }}
        >
          отправить
        </button>
        <p>
          {" "}
          если вы уже зарегистрированы
          <button onClick={() => changeReg(false)}>войдите</button>
        </p>
      </div>
    </div>
  );
};

export default observer(RegisterForm);
