import React from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
