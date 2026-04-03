import { useNavigate } from "react-router-dom";

export default function CtaBanner() {
  const navigate = useNavigate();

  return (
    <section style={s.section}>
      <div style={s.glow} />
      <p style={s.eyebrow}>— GET STARTED</p>
      <h2 style={s.title}>
        Start tracking your<br />
        <span style={{ color: "#e06c75" }}>film journey today</span>
      </h2>
      <p style={s.sub}>Free forever. No credit card required.</p>
      <div style={s.btns}>
        <button
          style={s.btnPrimary}
          onClick={() => navigate("/register")}
        >
          Create free account
        </button>
        <button
          style={s.btnSecondary}
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </div>
    </section>
  );
}

const s = {
  section: {
    position: "relative", textAlign: "center",
    padding: "7rem 2rem", overflow: "hidden",
  },
  glow: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%,-50%)",
    width: 500, height: 300, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(224,108,117,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  eyebrow: {
    fontSize: 11, letterSpacing: 3, color: "#e06c75",
    textTransform: "uppercase", marginBottom: 12,
  },
  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(36px, 5vw, 64px)",
    lineHeight: 1.05, letterSpacing: 1, color: "#fff",
    marginBottom: 14, position: "relative",
  },
  sub: {
    fontSize: 14, color: "rgba(255,255,255,0.4)",
    marginBottom: 28, position: "relative",
  },
  btns: { display: "flex", gap: 12, justifyContent: "center" },
  btnPrimary: {
    background: "#e06c75", color: "#fff",
    fontWeight: 600, fontSize: 15,
    padding: "13px 32px", borderRadius: 6,
    border: "none", cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
    transition: "opacity 0.2s",
  },
  btnSecondary: {
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.8)",
    fontWeight: 500, fontSize: 15,
    padding: "13px 28px", borderRadius: 6,
    border: "1px solid rgba(255,255,255,0.15)",
    cursor: "pointer", fontFamily: "'Inter', sans-serif",
  },
};