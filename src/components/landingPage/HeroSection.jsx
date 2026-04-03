import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [films, setFilms] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/moviesO")
      .then((r) => r.json())
      .then((data) => {
        setFilms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (films.length === 0) return;
    const t = setInterval(() => setActive((p) => (p + 1) % films.length), 6000);
    return () => clearInterval(t);
  }, [films]);

  if (loading) return <div style={s.skeleton} />;
  if (films.length === 0) return null;

  const film = films[active];
console.log(films)
  // Use defaults since backend doesn't have these fields
  const accent = "#e5c07b";
  const posterUrl = "/placeholder-poster.jpg";
  const bgGradient = "#0d1117";

  return (
    <section style={{ ...s.hero, background: bgGradient }}>
      {/* Poster */}
      <div style={s.posterArea}>
        <div style={{ ...s.posterFrame, boxShadow: `0 0 60px ${accent}22` }}>
          <img
            src={posterUrl}
            alt={film.title}
            style={s.posterImg}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div style={s.posterOverlay} />
        </div>
      </div>

      {/* Big watermark title */}
      <div style={s.bigTitleArea}>
        <p style={s.bigTitle}>{film.title?.toUpperCase()}</p>
      </div>

      {/* Bottom vignette */}
      <div style={s.vignette} />

      {/* Arrow */}
      <button
        onClick={() => setActive((p) => (p + 1) % films.length)}
        style={s.arrowBtn}
      >
        ›
      </button>

      {/* Info */}
      <div style={s.heroBottom}>
        <div style={s.heroBottomInner}>
          <div style={s.heroDetails}>
            <h1 style={s.heroTitle}>{film.title}</h1>
            <div style={s.heroMeta}>
              <span style={{ color: accent }}>★ {film.rating}</span>
              <span style={s.sep}>|</span>
              <span style={s.muted}>{film.duration}</span>
              <span style={s.sep}>·</span>
              <span style={s.muted}>{film.release_year}</span>
            </div>

            <div style={s.genreTags}>
              {film.genre && (
                <span style={{ ...s.genreTag, borderColor: `${accent}55`, color: accent }}>
                  {film.genre}
                </span>
              )}
            </div>

            <p style={s.heroDesc}>{film.description}</p>

            <div style={s.heroBtns}>
              <button
                style={{ ...s.btnPrimary, background: accent, color: "#06060a" }}
                onClick={() => navigate(`/films/${film.id}`)}
              >
                ▶ Trailer
              </button>
              <button
                style={s.btnSecondary}
                onClick={() => navigate(`/films/${film.id}`)}
              >
                More Info
              </button>
            </div>
          </div>

          {/* Dots */}
          <div style={s.dots}>
            {films.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  ...s.dot,
                  width: i === active ? 28 : 10,
                  background: i === active ? accent : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  skeleton: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0d0d1a, #1a1a2e)",
    animation: "pulse 1.5s infinite",
  },
  hero: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    transition: "background 1.2s ease",
  },
  posterArea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    paddingTop: 60,
  },
  posterFrame: {
    width: "min(50%, 660px)",
    aspectRatio: "16/9",
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.07)",
    position: "relative",
  },
  posterImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  posterOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, transparent 30%, rgba(6,6,10,0.9) 100%)",
  },
  bigTitleArea: {
    position: "absolute",
    right: "3%",
    top: "50%",
    transform: "translateY(-50%)",
    width: "44%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  bigTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(48px, 7vw, 96px)",
    lineHeight: 0.9,
    letterSpacing: 4,
    color: "rgba(255,255,255,0.06)",
    textAlign: "center",
    wordBreak: "break-word",
    userSelect: "none",
  },
  vignette: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
    background:
      "linear-gradient(to top, #06060a 0%, rgba(6,6,10,0.65) 55%, transparent 100%)",
    pointerEvents: "none",
  },
  arrowBtn: {
    position: "absolute",
    right: "2%",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: 28,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  heroBottom: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    padding: "0 5% 2.5rem",
  },
  heroBottomInner: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  heroDetails: { maxWidth: 440 },
  heroTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(30px, 4vw, 50px)",
    letterSpacing: 2,
    color: "#fff",
    marginBottom: 10,
  },
  heroMeta: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
    marginBottom: 10,
  },
  sep: { color: "rgba(255,255,255,0.2)", fontSize: 11 },
  muted: { color: "rgba(255,255,255,0.5)" },
  genreTags: { display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" },
  genreTag: {
    fontSize: 11,
    fontWeight: 500,
    border: "1px solid",
    borderRadius: 4,
    padding: "2px 10px",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  heroDesc: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.52)",
    marginBottom: 20,
  },
  heroBtns: { display: "flex", gap: 10, alignItems: "center" },
  btnPrimary: {
    fontWeight: 600,
    fontSize: 13,
    padding: "9px 22px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    letterSpacing: 0.3,
    fontFamily: "'Inter', sans-serif",
  },
  btnSecondary: {
    fontWeight: 500,
    fontSize: 13,
    padding: "9px 20px",
    borderRadius: 6,
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,255,255,0.15)",
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  dots: { display: "flex", gap: 6, alignItems: "center", paddingBottom: 4 },
  dot: {
    height: 3,
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    transition: "width 0.4s, background 0.4s",
    padding: 0,
  },
};