import React, { createContext, useState } from "react";

export const RegisterContext = createContext();
export const RegisterContextProvider = ({ children }) => {

  const[formData, setForm] = useState({firstName:'', username:'', lastName:'', password:'', password1:''});
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('Form entry: ', formData);
    setForm({firstName:'', username:'', lastName:'', password:'', password1:''});
  }
  return (
    <RegisterContext.Provider value={{formData,setForm, handleSubmit}}>
        {children}
    </RegisterContext.Provider>
  );
};


