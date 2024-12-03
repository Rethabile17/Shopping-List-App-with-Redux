import { useState } from "react";
import './Login.css'; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  
  const handleLogin = () => {
    setError("");

    
    if (!email || !password || !userName) {
      setError("Please enter all inputs.");
      return;
    }

   
    const user = { email, password, userName };
    localStorage.setItem("user", JSON.stringify(user));

    
    setEmail("");
    setPassword("");
    setUserName("");

    
    Swal.fire({
      title: "Sign Up Successful!",
      text: "Your account has been created. Please log in.",
      icon: "success",
      confirmButtonText: "Proceed to Login",
    }).then(() => {
      navigate("/"); 
    });
  };

 
  const handleNav2 = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1 className="login">Shopping List</h1>
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
      <button className="Button" onClick={handleLogin}>
        Sign Up
      </button>

      {error && <div className="error-message">{error}</div>} 

      <p onClick={handleNav2}>Already have an account? Login</p>
    </div>
  );
}

export default Login;
