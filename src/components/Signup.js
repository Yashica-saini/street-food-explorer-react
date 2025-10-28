import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showUsernameHint, setShowUsernameHint] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usernameRegex = /^[A-Za-z0-9]{8,14}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;

    if (!usernameRegex.test(username)) {
      alert("Username must be 8-14 characters and contain only letters and numbers.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must include uppercase, lowercase, number, and special character.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    alert("Sign up successful 🎉");
    navigate("/home");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setShowUsernameHint(true)}
          required
        />
        {showUsernameHint && (
          <div className="hint">8–14 characters, letters & numbers only</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setShowPasswordHint(true)}
          required
        />
        {showPasswordHint && (
          <div className="hint">
            8–14 characters, must include uppercase, lowercase, number & symbol
          </div>
        )}

        <label htmlFor="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
