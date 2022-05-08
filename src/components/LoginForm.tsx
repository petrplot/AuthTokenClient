import {observer} from "mobx-react-lite";
import React, {FC, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Context} from "..";

interface propForm {
  changeReg(bool: boolean): void;
}

const LoginForm: FC<propForm> = ({changeReg}) => {
  const {userStore} = useContext(Context);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();

  console.log("rendr logform");

  useEffect(() => {
    if (userStore.isAuth) {
      nav("/");
    }
  }, [userStore.isAuth, nav]);

  return (
    <div>
      <div>
        <h1>Вход</h1>
      </div>
      <div>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            userStore.login(email, password);
            setEmail("");
            setPassword("");
          }}
        >
          отправить
        </button>
        <p>
          {" "}
          если вы еще не зарегистрированы
          <button onClick={() => changeReg(true)}>зарегистрируйтесь</button>
        </p>
      </div>
    </div>
  );
};

export default observer(LoginForm);
