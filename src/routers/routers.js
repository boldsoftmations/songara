import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./../pages/Auth/auth";
import Home from "./../pages/Home/home";

const Routers = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [navigate]);
  
  


console.log("token is",token);
  return (
    <Routes>
 <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
 export default Routers;