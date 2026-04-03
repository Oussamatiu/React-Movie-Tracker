import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={s.header}>
      <nav style={s.nav}>
        <Link to="/" style={s.link}>Home</Link>
        <Link to="/login" style={s.link}>Login</Link>
        <Link to="/register" style={s.link}>Register</Link>
      </nav>
    </header>
  );
}

const s = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    display: "flex",
    alignItems: "center",
    padding: "0 5%",
    background: "linear-gradient(90deg, rgba(10,10,20,0.95) 0%, rgba(10,10,20,0.8) 100%)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
    zIndex: 1000,
    backdropFilter: "blur(6px)",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: 14,
    textDecoration: "none",
    position: "relative",
    padding: "6px 0",
    transition: "all 0.3s ease",
  },
  linkHover: {
    color: "#e5c07b",
  }
};