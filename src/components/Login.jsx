import React from "react";
import { LoginContextProvider } from "../context/LoginContextProvider";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login">
      <LoginContextProvider>
        <LoginForm />
      </LoginContextProvider>
    </div>
  );
};

export default Login;
