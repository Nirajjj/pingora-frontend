import React, { useState, useContext } from "react";
import "./AuthForm.css";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const AuthForm = ({ type = "login" }) => {
  const isSignup = type === "signup";
  const { login, signup } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = isSignup
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      : { email: formData.email, password: formData.password };

    if (isSignup) {
      signup(dataToSend);
    } else {
      login(dataToSend);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="form-title">{isSignup ? "Sign Up" : "Login"}</h2>

        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          {isSignup ? "Create Account" : "Login"}
        </button>
        {isSignup ? (
          <p>
            already a user? <Link to={"/login"}>login</Link>
          </p>
        ) : (
          <p>
            new user? <Link to={"/signup"}>signin</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
