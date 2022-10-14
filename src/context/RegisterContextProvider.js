import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext();
export const RegisterContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [formData, setForm] = useState({
    firstName: "",
    username: "",
    lastName: "",
    password: "",
    password1: "",
  });
  const [messageErr, setMessageErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password1) {
      setMessageErr("Error! The passwords do not match!");
      console.log("Form entry: ", formData);
    } else {
      console.log("Form entry: ", formData);
      setForm({
        firstName: "",
        username: "",
        lastName: "",
        password: "",
        password1: "",
      });
      setMessageErr('');
      return navigate('/login');
    }
  };
  return (
    <RegisterContext.Provider
      value={{ formData, setForm, handleSubmit, messageErr }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
