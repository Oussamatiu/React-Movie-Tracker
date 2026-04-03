import { useNavigate } from "react-router-dom";

export default function FilmCard({ film }) {
  const navigate = useNavigate();

  if (!film) return null;

  return (
    <div
      style={s.card}
      onClick={() => navigate(`/films/${film.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "rgba(224,108,117,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {/* Thumbnail */}
      <div style={s.thumb}>
        {film.poster_url ? (
          <img
            src={film.poster_url}
            alt={film.title}
            style={s.thumbImg}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : (
          <span style={{ fontSize: 32 }}>🎥</span>
        )}

        {/* Rating badge */}
        <div style={s.ratingBadge}>
          <span style={{ color: "#e5c07b" }}>★</span> {film.rating}
        </div>

        {/* Watched / Queue badge */}
        <span
          style={{
            ...s.statusBadge,
            background: film.watched
              ? "rgba(229,192,123,0.18)"
              : "rgba(152,195,121,0.15)",
            color: film.watched ? "#e5c07b" : "#98c379",
            border: `1px solid ${film.watched ? "rgba(229,192,123,0.35)" : "rgba(152,195,121,0.35)"}`,
          }}
        >
          {film.watched ? "✓ Seen" : "+ Queue"}
        </span>
      </div>

      {/* Info */}
      <div style={s.body}>
        <p style={s.title}>{film.title}</p>
        <div style={s.meta}>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{film.release_year}</span>
          <span style={s.sep}>·</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{film.genre}</span>
        </div>
      </div>
    </div>
  );
}

const s = {
  card: {
    borderRadius: 10, overflow: "hidden",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    cursor: "pointer",
    transition: "transform 0.2s, border-color 0.2s",
  },
  thumb: {
    height: 130, display: "flex",
    alignItems: "center", justifyContent: "center",
    background: "rgba(255,255,255,0.04)",
    position: "relative", overflow: "hidden",
  },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  ratingBadge: {
    position: "absolute", bottom: 8, left: 10,
    background: "rgba(0,0,0,0.65)", borderRadius: 6,
    padding: "2px 8px", fontSize: 11, color: "#fff", fontWeight: 500,
  },
  statusBadge: {
    position: "absolute", top: 8, right: 8,
    fontSize: 10, fontWeight: 600,
    borderRadius: 20, padding: "2px 8px",
  },
  body: { padding: "10px 12px 14px" },
  title: {
    fontSize: 13, fontWeight: 500, color: "#f0edf8",
    marginBottom: 5, lineHeight: 1.4,
  },
  meta: { display: "flex", gap: 4, fontSize: 12, alignItems: "center" },
  sep: { color: "rgba(255,255,255,0.2)", fontSize: 11 },
};