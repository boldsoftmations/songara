import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./../pages/Auth/auth";
import Home from './../pages/Home/home';


const Routers = () => {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  console.log("token is", token);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routers;
