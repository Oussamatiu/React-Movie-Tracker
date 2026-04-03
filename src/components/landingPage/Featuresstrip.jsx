const features = [
  { icon: "📋", title: "Smart Watchlist",  desc: "Track what you want to see and never miss a recommendation." },
  { icon: "📁", title: "Custom Lists",     desc: "Organize films by mood, genre, director — your rules." },
  { icon: "⭐", title: "Rate & Review",    desc: "Score every film and build your personal taste profile." },
  { icon: "🔒", title: "Secure Access",    desc: "Your data is protected by Laravel Sanctum authentication." },
];

export default function FeaturesStrip() {
  return (
    <section style={s.strip}>
      {features.map((f, i) => (
        <div
          key={f.title}
          style={{
            ...s.item,
            borderRight: i < features.length - 1
              ? "1px solid rgba(255,255,255,0.05)"
              : "none",
          }}
        >
          <span style={s.icon}>{f.icon}</span>
          <p style={s.title}>{f.title}</p>
          <p style={s.desc}>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

const s = {
  strip: {
    borderTop: "1px solid rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    background: "rgba(255,255,255,0.015)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },
  item: { padding: "2.5rem 2rem" },
  icon: { fontSize: 26, marginBottom: 10, display: "block" },
  title: { fontSize: 15, fontWeight: 600, color: "#f0edf8", marginBottom: 6 },
  desc: { fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 },
};