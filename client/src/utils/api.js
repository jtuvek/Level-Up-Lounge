import React, { useState } from 'react';
import { signupForm } from './path-to-your-api-file'; // Update with the correct path

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
        firstName:
        <input type="text" name="username" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        lastName:
        <input type="email" name="email" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      {/* Add other form fields as needed */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
