import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RegisterContext } from "../../context/RegisterContextProvider.js";
import Login from "../login/Login.jsx";

const RegisterForm = () => {
  const { formData, setForm, handleSubmit, messageErr } = useContext(
    RegisterContext
  );
  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>HRMI REGISTRATION</h1>
        {messageErr ? <span>{messageErr}</span> : ""}

        <label htmlFor="userName">Username</label>
        <input
          autoComplete="off"
          placeholder="enter email"
          value={formData.username}
          id="userName"
          required
          type="email"
          onChange={(e) => setForm({ ...formData, username: e.target.value })}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          autoComplete="off"
          placeholder="enter first name"
          value={formData.firstName}
          id="firstName"
          required
          type="text"
          onChange={(e) => setForm({ ...formData, firstName: e.target.value })}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          autoComplete="off"
          placeholder="enter last name"
          value={formData.lastName}
          id="lastName"
          required
          type="text"
          onChange={(e) => setForm({ ...formData, lastName: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="enter password"
          value={formData.password}
          id="password"
          required
          type="password"
          onChange={(e) => setForm({ ...formData, password: e.target.value })}
        />
        <label htmlFor="password1">Confirm Password</label>
        <input
          placeholder="confirm password"
          value={formData.password1}
          id="password1"
          required
          type="password"
          onChange={(e) => setForm({ ...formData, password1: e.target.value })}
        />
        <button type="submit">REGISTER</button>
        <Link to="/login" component={<Login />}>
          Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
