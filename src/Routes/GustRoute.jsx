import { Navigate } from "react-router-dom";

function GustRoute({ children }) {
    const token = localStorage.getItem("token");
    if (token) {
         return <Navigate to="/dashboard" />;
    }
    return children;
} 
export default GustRoute