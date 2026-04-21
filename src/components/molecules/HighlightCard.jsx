export default function HighlightCard({ icon, title, desc }) {
  return (
    <div className="hl-card">
      <div className="hl-icon">{icon}</div>
      <div className="hl-title">{title}</div>
      <div className="hl-desc">{desc}</div>
    </div>
  );
}
