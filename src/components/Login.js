import { useState } from "react";
import './Login.css'; // Import CSS for styling
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For validation error messages

  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Call your login function or dispatch here
    // login({ email, password });

    // Clear the input fields after submission
    setEmail("");
    setPassword("");
    
    // Navigate to the home page after successful login
    handleNav();
  };

  const handleNav = () => {
    navigate('/home');
  };

  const handleNav2 = () => {
    navigate('/');
  };
  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
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
      <button className="Button" onClick={handleLogin}>Login</button>

      {error && <div className="error-message">{error}</div>} {/* Display error */}

      <p onClick={handleNav2}>Already have an account? Login</p>
    </div>
  );
}

export default Login;
