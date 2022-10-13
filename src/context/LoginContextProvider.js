import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username, Password: ", username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <LoginContext.Provider
      value={{ username, password, setPassword, setUsername, handleSubmit }}
    >
      {children}
    </LoginContext.Provider>
  );
};
