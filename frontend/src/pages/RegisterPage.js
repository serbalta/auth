// src/pages/RegisterPage.js
import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const handleSuccess = (userData) => {
    console.log("User registered:", userData);
    // Registration success logic (e.g., redirect to login page)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm onSuccess={handleSuccess} />
    </div>
  );
};

export default RegisterPage;
