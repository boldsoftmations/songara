import React, { useState } from "react";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = {
        email: user.email,
        password: user.password,
      };
      const response = await axios.post(LOGIN_URL, req);
      if (response.data && response.data.token && response.data.token.access) {
        localStorage.setItem("token", response.data.token.access);
        navigate("/home");
      }
    } catch (err) {
      console.log("Error occurred: ", err);
    }
  };
  
  return (
    <>
      <h1>Signin</h1>
      <CustomInput
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <CustomInput
        label="Password"
        type="password"
        placeholder="Enter your Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <CustomButton label="Sign in" onClick={handleSubmit} />
    </>
  );
};

export default Login;

const LOGIN_URL = `${process.env.REACT_APP_TESTING_BACKEND_URL}/api/user/login/`;
