import React, { useState } from 'react';
import CustomInput from '../../components/Inputs/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import './signup.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SIGNUP_URL = `${process.env.REACT_APP_TESTING_BACKEND_URL}/api/user/register/`;

const Signup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(SIGNUP_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Signup successful');
        Navigate('/login');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-form">
      <h1>Signup</h1>
      <div className="input-row">
        <div style={{ display: 'flex', gap: '10px' }}>
          <CustomInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <CustomInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <CustomInput
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <CustomInput
        name="contact"
        label="Contact"
        type="tel"
        placeholder="Enter your contact number"
        value={formData.contact}
        onChange={handleChange}
      />
      <div className="input-row">
        <div style={{ display: 'flex', gap: '10px' }}>
          <CustomInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <CustomInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <CustomButton label="Sign up" onClick={handleSignup} style={{ fontSize: '1.2em', padding: '10px 20px' }} />
      </div>
    </div>
  );
};

export default Signup;