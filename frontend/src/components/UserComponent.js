import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to fetch users from the API
  const fetchUsers = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const registerUser = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { name, email, password })
      .then(res => {
        console.log(res.data);
        // Clear the input fields
        setName('');
        setEmail('');
        setPassword('');
        // Fetch the users again to refresh the list
        fetchUsers();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Register User</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={registerUser}>Register</button>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;