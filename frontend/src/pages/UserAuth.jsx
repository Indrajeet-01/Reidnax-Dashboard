import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../styles/userAuth.css'

const UserAuth = () => {
    const navigate = useNavigate()
  const [isNewUser, setIsNewUser] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:8500/register', formData);
      console.log(response.data);
      navigate('/dashboard')
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:8500/login', formData);
      console.log(response.data);
      navigate('/dashboard')
    } catch (error) {
      console.error('Error logging in user:', error.response.data);
    }
  };

  const toggleForm = () => {
    setIsNewUser((prevIsNewUser) => !prevIsNewUser);
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      {isNewUser ? (
        <form id="registrationForm" onSubmit={handleRegister}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">Register</button>
        </form>
      ) : (
        <form id="loginForm" onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">LogIn</button>
          
        </form>
      )}

      <button onClick={toggleForm}>
        {isNewUser ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default UserAuth;
