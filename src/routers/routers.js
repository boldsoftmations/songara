import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./../pages/Auth/auth";
import Home from "./../pages/Home/home";

const Routers = () => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Simulate an API call to get the token
      // Replace this with your actual API call
      const fetchToken = async () => {
        const fakeToken = "23432543563"; // Fetch this from your API
        setToken(fakeToken);
      };
  
      fetchToken();
    }, []);
  
    useEffect(() => {
      if (token) {
        navigate("/home");
      } else {
        navigate("/");
      }
    }, [token, navigate]);


console.log("token is",token);
  return (
    <Routes>
 <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
 export default Routers;