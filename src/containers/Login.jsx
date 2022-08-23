import React from 'react';
import '../styles/Login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        <form action="/" className="form">
          <label for="email">Email address</label>
          <input type="text" id="email" placeholder="Email" className="input input-email"/>
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password"/>
          <input type="submit" value="Log in" className="primary-button login-button"/>
          <a href="/">Forgot my password</a>
          <button className="secondary-button signup-button">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;