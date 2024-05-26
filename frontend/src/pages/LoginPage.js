// src/pages/LoginPage.js
import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = (userData) => {
    console.log("User authenticated:", userData);
    navigate("/dashboard"); // Giriş yaptıktan sonra DashboardPage'e yönlendir
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onSuccess={handleSuccess} />
    </div>
  );
};

export default LoginPage;
