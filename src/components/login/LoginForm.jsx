import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContextProvider';
import Register from '../register/Register';

const LoginForm = () => {
 const {handleSubmit, username, password, setPassword, setUsername} = useContext(LoginContext);
  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>HRMI LOGIN</h1>
        <label htmlFor="userName">Username</label>
        <input
          autoComplete="off"
          placeholder="enter email"
          value={username}
          id="userName"
          required
          type="email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="enter password"
          value={password}
          id="password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOGIN</button>
        <Link to='/register' component={<Register/>}>Register</Link>
      </form>
    </>
  )
}

export default LoginForm