export default function Badge({ children }) {
  return (
    <div className="hero-badge">
      <span className="dot" aria-hidden="true" />
      {children}
    </div>
  );
}
