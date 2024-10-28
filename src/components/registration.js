import { useState } from "react";
import './Login.css'; // Import CSS for styling
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(""); // For validation error messages

  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");

    // Basic validation
    if (!email || !password || !userName) {
      setError("Please enter all inputs please.");
      return;
    }

    setEmail("");
    setPassword("");
    setUserName("");
    // Navigate to the home page after successful login
    handleNav();
  };

  const handleNav = () => {
    navigate('/home');
  };

  const handleNav2 = () => {
    navigate('/registration');
  };


  return (
    <div className="login-container">
      <h1 className="title">Sign Up</h1>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="Button" onClick={handleLogin}>Sign Up</button>
     
      {error && <div className="error-message">{error}</div>} {/* Display error */}
       <p onClick={handleNav2}>Don't have an account? Sign up</p>
    </div>
  );
}

export default Login;

