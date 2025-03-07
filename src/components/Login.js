import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedInStore }) => {
  const [storeName, setStoreName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(storeName, password)) {
      setLoggedInStore(storeName);
      navigate("/dashboard");
    } else {
      setError("Invalid store name or password.");
    }
  };

  return (
    <div>
      <h2>Store Owner Login</h2>
      <label>Store Name: </label>
      <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
