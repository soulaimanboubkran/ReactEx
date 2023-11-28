
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Users() {
  const [res, setRes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        
        const response = await axios.get(`https://devowfs.onrender.com/users`);
        setRes(response.data.users);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, []);



  console.log(res);
  const handleDelete = async (userId) => {
    try {
      // Make a DELETE request to remove the user
      await axios.delete(`https://devowfs.onrender.com/users/${userId}`);

      // Update the state after successful deletion
     
    } catch (error) {
      setError(error);
    }
  };
  if (error) {
    console.error('Request Error:', error);
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Link to='/user' >add user</Link>
      {/* Display the received data */}
      {res.length > 0 &&
      res.map((user) => (
        <div key={user._id}>
          <Link to={`/put/${user._id}`}>
          <div>first name : {user.firstname}</div>
          <div>Last name : {user.lastname}</div>
          </Link>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>

      ))}
    </>
  );
}