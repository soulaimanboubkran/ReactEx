import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Put() {
  const { id } = useParams(); // Use useParams to get the id from the URL
  const [user, setUser] = useState([]); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://devowfs.onrender.com/users/${id}`);
        setUser(response.data.user);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [id]); // Add id as a dependency to useEffect

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://devowfs.onrender.com/users/${id}`, user);
       navigate('/users')// Redirect to the users list after successful update
    } catch (error) {
      setError(error);
    }
  };

  console.log(user);
  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} >
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
