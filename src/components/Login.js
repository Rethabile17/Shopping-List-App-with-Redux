import { useState } from "react";
import './Login.css'; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const validateForm = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return false;
    }
    setError("");
    return true;
  };

  
  const handleLogin = async () => {
    if (!validateForm()) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonText: "Proceed",
        }).then(() => {
          navigate("/home"); 
        });
      } else {
        Swal.fire({
          title: "Login Unsuccessful!",
          text: "Invalid email or password.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } else {
      Swal.fire({
        title: "No User Found!",
        text: "Please register first.",
        icon: "warning",
        confirmButtonText: "Register",
      }).then(() => {
        navigate("/registration"); 
      });
    }
  };

 
  const handleNav = () => {
    navigate("/registration");
  };

  return (
    <div className="login-container">
      <h1 className="login">Shopping List</h1>
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
      <button className="Button" onClick={handleLogin}>
        Login
      </button>

      {error && <div className="error-message">{error}</div>} 

      <p onClick={handleNav}>Don't have an account? Sign up</p>
    </div>
  );
}

export default Login;
