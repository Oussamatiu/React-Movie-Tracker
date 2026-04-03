import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../api/auth";

     
function Register(){
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
     const navigate = useNavigate();

        const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }
        try {
            const response = await registerUser({
                name,
                email,
                password
            });
            console.log("Registration successful:", response.data);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        
        } catch (error) {
            console.error("Error registering user:", error);
            setError("Error registering user");
        } finally {
            setLoading(false);
           
    }
};

      return (
       <div
  style={{
    maxWidth: "400px",
    margin: "3rem auto",
    padding: "2.5rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    position: "relative",
    fontFamily: "'Inter', sans-serif",
  }}
>

  <button
    type="button"
    
    style={{
      position: "absolute",
      top: "20px",
      left: "20px",
      background: "none",
      border: "none",
      fontSize: "18px",
      fontWeight: "600",
      color: "#4A90E2",
      cursor: "pointer",
      transition: "0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "#357ABD")}
    onMouseLeave={(e) => (e.target.style.color = "#4A90E2")}
  >
    ← Back
  </button>

 
  <h2
    style={{
      textAlign: "center",
      marginBottom: "2rem",
      fontSize: "1.8rem",
      color: "#333",
      fontWeight: "700",
    }}
  >
    Register
  </h2>


  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    
    <Label htmlFor="name">Name</Label>
    <Input
      id="name"
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{
        padding: "0.8rem 1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        outline: "none",
        transition: "0.2s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
    />

    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        padding: "0.8rem 1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        outline: "none",
        transition: "0.2s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
    />

    <Label htmlFor="password">Password</Label>
    <Input
      id="password"
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{
        padding: "0.8rem 1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        outline: "none",
        transition: "0.2s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
    />

    <Label htmlFor="confirmPassword">Confirm Password</Label>
    <Input
      id="confirmPassword"
      type="password"
      placeholder="Confirm your password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      style={{
        padding: "0.8rem 1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        outline: "none",
        transition: "0.2s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
    />

   
    {error && <p style={{ color: "red", fontSize: "0.9rem", textAlign: "center" }}>{error}</p>}

    
    <Button
      type="submit"
      style={{
        marginTop: "1rem",
        padding: "0.8rem",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#4A90E2",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        transition: "0.2s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#357ABD")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#4A90E2")}
    >
      {loading ? "Registering..." : "Register"}
    </Button>
  </form>
</div>
      );
}

export default Register