// src/pages/HomePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();

  const handleSuccess = (userData) => {
    console.log("User authenticated:", userData);
    // Authenticated user logic (e.g., redirect to dashboard)
    navigate("/dashboard"); // Örneğin, bir dashboard sayfasına yönlendirme
  };

  return (
    <div>
      {isRegistering ? (
        <>
          <RegisterForm onSuccess={handleSuccess} />
          <p>
            Already have an account?{" "}
            <button onClick={() => setIsRegistering(false)}>Login</button>
          </p>
        </>
      ) : (
        <>
          <LoginForm onSuccess={handleSuccess} />
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
