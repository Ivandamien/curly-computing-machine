// src/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
          Telephone
        </label>
        <input
          type="text"
          id="tel"
          name="tel"
          onChange={handleChange}
          value={formData.phoneNumber}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      {/* ... (similar structure for other form fields) */}
      <div className="mt-4">
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
