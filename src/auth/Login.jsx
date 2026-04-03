import { useState } from "react";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/auth";

function Login(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        try {
            const response = await loginUser({
                email,
                password
            })
            console.log("Login successful:" , response.data)
            localStorage.setItem("token", response.data.token);
        }catch(error){
            console.error(error)
            setError(error.response?.data?.message || "Login failed")
        }finally{
            setLoading(false)
        }
    }



    return (
        <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <button
                style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "none",
                border: "none",
                fontSize: "16px",
                cursor: "pointer"
        }}
      >
        ← Back
      </button>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
         {error && <p style={{ coloe: "red"}}>{error}</p> }
        <Button type="submit">{loading ? "Logging in ..." : "Login"}</Button>
      </form>
    </div>

    )
}

export default Login;