import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });

      // Handle the response or update the UI as needed
      console.log('Login successful:', data.loginUser);
    } catch (error) {
      // Handle error (display error message, log, etc.)
      console.error('Error during login:', error);
    }
  };

  return (
    <form className="loginContainer" onSubmit={handleSubmit}>
      <div>
        <label className='email-header' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="email-input custom-input"
        />
      </div>

      <div>
        <label className='password-header' htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="password-input custom-input"
        />
      </div>

      <button className='login-form-button' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;