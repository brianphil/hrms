import React, {useContext} from 'react'
import { LoginContext } from '../context/LoginContextProvider';

const LoginForm = () => {
 const {handleSubmit, username, password, setPassword, setUsername} = useContext(LoginContext);
  return (
    <>
    
      <form onSubmit={handleSubmit} className="login-form">
        <h1>HRMI LOGIN</h1>
        <label htmlFor="userName">Username</label>
        <input
          autoComplete="off"
          placeholder="enter username"
          value={username}
          id="userName"
          required
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          placeholder="enter password"
          value={password}
          id="password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOGIN</button>
        <a href="#">Register</a>
      </form>
    </>
  )
}

export default LoginForm