import React, { useState } from 'react';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    favConsole: '',
    password: '',
    // Add other form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the signupForm function from your API file
      const response = await signupForm(formData);

      // Handle the response or update the UI as needed
      console.log('Signup successful:', response);
    } catch (error) {
      // Handle error (display error message, log, etc.)
      console.error('Error during signup:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Favorite Console:
        <input type="text" name="favConsole" value={formData.favConsole} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
