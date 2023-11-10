export const signupForm = (formData) => {
    return fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw error; // Propagate the error for handling in the component
    });
  };