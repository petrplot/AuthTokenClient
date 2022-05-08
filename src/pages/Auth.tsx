import React, {FC, memo, useState} from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Auth: FC = () => {
  console.log("rendr auth");

  const [isReg, setNoReg] = useState(false);
  const changeReg = (bool: boolean) => {
    setNoReg(bool);
  };

  return (
    <div>
      {isReg ? <RegisterForm changeReg={changeReg} /> : <LoginForm changeReg={changeReg} />}
    </div>
  );
};

export default memo(Auth);
