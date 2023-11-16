import React, { useState } from 'react';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      favConsole: '', // Updated to use a dropdown
      password: ''
    });

    const [addUser, { error }] = useMutation(ADD_USER);
  
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
        // Call the signupForm function from your API file
    const { data } = await addUser({
      variables: { ...formData },
    });
  
        // Handle the response or update the UI as needed
        console.log('Signup successful:', data.addUser);
      } catch (error) {
        // Handle error (display error message, log, etc.)
        console.error('Error during signup:', error);
      }
    };
  
    return (
      <form className="signupcontainer" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
  
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
  
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
  
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
  
        <div>
          <label htmlFor="favoriteConsole">Favorite Console:</label>
          <select
            id="favoriteConsole"
            name="favoriteConsole"
            value={formData.favoriteConsole}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your favorite console</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Nintendo">Nintendo</option>
            <option value="Xbox">Xbox</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
  
        <button type="submit">Sign Up</button>
      </form>
    );
  };
  
  export default SignUpForm;
