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
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Store Owner Login</h2>
        <div className="form-group mb-3">
          <label>Store Name:</label>
          <input
            type="text"
            className="form-control"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
