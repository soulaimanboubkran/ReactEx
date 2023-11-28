import React, { useState } from 'react';
import axios from 'axios';


export default function User() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://devowfs.onrender.com/users', formData);
      console.log(response.data);
      // Reset the form after a successful submission
      setFormData({
        firstname: '',
    lastname:'',
    email: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Lastname:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );

 
}

