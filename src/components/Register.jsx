import React, { useState } from 'react';
import '../index.css'
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(`Email: ${email}, Password: ${password}`);
      // You can replace this console.log with your own authentication logic
    } else {
      setErrors(errors);
    }
  }

  const validateForm = () => {
    const errors = {};
    if (!name) {
        errors.name = 'Name is required';
      } 
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    return errors;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <p>SpeakToMe</p>
        <p>Register</p>
        <div className="form-group">
          <input
            type="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <input  style={{display:'none'}}   type='file' name="file"/>
        <label htmlFor='file'>bbbb</label>       
         <button type="submit">Sign Up</button>
        <label htmlFor="text">
          You already have an account?<a href="#"> Login</a>
        </label>
      </form>
    </div>
  );
};

export default Login;