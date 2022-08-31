import React, { useRef } from 'react';
import '../styles/Login.scss'

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userName: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }

  return (
    <div className="login">
      <div className="form-container">
        <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        <form action="/" className="form" ref={form}>
          <label for="email">Email address</label>
          <input type="text" name="email" placeholder="Email" className="input input-email"/>
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password"/>
          <button
          onClick={handleSubmit}
          className="primary-button login-button">
          Log in
          </button>
          <a href="/">Forgot my password</a>
          <button className="secondary-button signup-button">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;