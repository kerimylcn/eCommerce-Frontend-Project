import { useState } from "react";
import { useAppContext } from "../../../context/state";
import { Eye } from "../../../assets/icons/SVG";

import "./login.scss";

const Login = () => {
  const state = useAppContext();
  const [isPswVisible, setIsPswVisible] = useState(false);
  return (
    <form className="login__form">
      <h1>Sign in</h1>
      <div className="login__form--email">
        <span>Email</span>
        <input type="email" name="email" required />
      </div>
      <div className="login__form--password">
        <div>
          <span>Lato</span>
          <span>forgot password</span>
        </div>
        <input
          type={isPswVisible ? "text" : "password"}
          id="psw"
          name="psw"
          pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          title="At least 6 characters length, contain 1 numeric, 1 uppercase letter, 1 special character"
          required
        ></input>
        <div onClick={() => setIsPswVisible(!isPswVisible)}>
          <Eye />
        </div>
      </div>
      <div className="login__form--submit">
        <button>LOGIN</button>
        <span>I don't have an account</span>
      </div>
    </form>
  );
};

export default Login;
