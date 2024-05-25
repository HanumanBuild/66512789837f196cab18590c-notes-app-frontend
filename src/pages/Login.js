import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

// Ensure that the form is correctly capturing user input for email and password.
// Verify that the form submission is making an API call to the backend.

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check the form input handlers
  // Ensure that the `email` and `password` state variables are being updated correctly when the user types in the input fields.

  // Check the form submission handler
  // Ensure that the `handleSubmit` function is correctly preventing the default form submission behavior.
  // Verify that the `handleSubmit` function is making an API call to the backend using Axios.

  // Update the `handleSubmit` function if necessary
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard or handle successful login
    } catch (error) {
      console.error('Error logging in', error);
      // Handle error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;

// Check if the form is correctly capturing user input and making an API call to the backend
// Ensure the form submission is handled correctly
// Add comments before and after the edited sections so I know where in the original file to place the edits.