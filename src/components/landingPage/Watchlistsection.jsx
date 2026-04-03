import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilmCard from "./Filmcard";


export default function WatchlistSection() {
  const [films, setFilms]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/moviesO")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then((data) => {
        setFilms(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section style={s.section}>
      {/* Header */}
      <div style={s.head}>
        <div>
          <p style={s.eyebrow}>— RECENTLY ADDED</p>
          <h2 style={s.title}>
            Your <span style={{ color: "#e06c75" }}>Watchlist</span>
          </h2>
        </div>
        <button style={s.seeAll} onClick={() => navigate("/dashboard")}>
          See all →
        </button>
      </div>

      {/* States */}
      {loading && (
        <div style={s.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={s.skeletonCard} />
          ))}
        </div>
      )}

      {error && (
        <p style={s.errorMsg}>Could not load films. Please try again later.</p>
      )}

      {!loading && !error && films.length === 0 && (
        <p style={s.emptyMsg}>No films yet. Start adding to your watchlist!</p>
      )}

      {!loading && !error && films.length > 0 && (
        <div style={s.grid}>
          {films.slice(0, 6).map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      )}
    </section>
  );
}

const s = {
  section: { maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem" },
  head: {
    display: "flex", alignItems: "flex-end",
    justifyContent: "space-between", marginBottom: "2rem",
  },
  eyebrow: {
    fontSize: 11, letterSpacing: 3, color: "#e06c75",
    textTransform: "uppercase", marginBottom: 6,
  },
  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(28px, 4vw, 44px)",
    letterSpacing: 1, color: "#fff",
  },
  seeAll: {
    fontSize: 13, color: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 6, padding: "6px 14px",
    background: "transparent", cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
    transition: "color 0.2s, border-color 0.2s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
    gap: 14,
  },
  skeletonCard: {
    height: 185, borderRadius: 10,
    background: "rgba(255,255,255,0.04)",
    animation: "pulse 1.5s ease-in-out infinite",
  },
  errorMsg: { color: "#e06c75", fontSize: 14, padding: "1rem 0" },
  emptyMsg: { color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "1rem 0" },
};