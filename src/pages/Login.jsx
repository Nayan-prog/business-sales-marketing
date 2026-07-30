import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import "../styles/Login.css";
import { loginUser } from "../services/authService";

export default function Login({ onBack }) {
  const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const handleLogin = async () => {
  try {
    setLoading(true);

    console.log("Username:", username);
    console.log("Password:", password);

    const data = await loginUser(username, password);

    console.log("Response:", data);

    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    alert("Login Successful");

    navigate("/dashboard");

  } catch (error) {
    console.log("FULL ERROR:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    alert("Login Failed");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="login-page">

      <div className="login-card">

        

        {/* Logo */}

        <div className="logo">
          <h1>Groov</h1>
          
        </div>

        <h2>Sign in to continue</h2>

        {/* Google */}

        <button className="social-btn google-btn">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        {/* Phone */}

        <button className="social-btn phone-btn">
          📱 Continue with Phone
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        {/* Email */}

        <div className="input-box">
          <Mail size={20} />

          <input
  type="email"
  placeholder="Email Address"
  value={username}
onChange={(e) => setUsername(e.target.value)}
/>
        </div>

        {/* Password */}

        <div className="input-box">
          <Lock size={20} />

          <input
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <button
            type="button"
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <button
  className="login-btn"
  onClick={handleLogin}
>
  {loading ? "Signing In..." : "Sign In"}
</button>

        <p className="register">
          Don't have an account?

          <a href="#"> Create Account</a>
        </p>

      </div>

    </div>
  );
}
