import React, { useState } from "react";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({setOpen}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setOpen(true);
      const req = {
        email: user.email,
        password: user.password,
      };
      const response = await axios.post(LOGIN_URL, req);
      const { access, refresh } = response.data.token;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      navigate("/home");
      setOpen(false);
    } catch (err) {
      console.log("Error occurred: ", err);
      setOpen(false);
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
