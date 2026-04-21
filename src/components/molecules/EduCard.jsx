export default function EduCard({ degree, school }) {
  return (
    <div className="edu-card">
      <div className="edu-icon">🎓</div>
      <div>
        <div className="edu-degree">{degree}</div>
        <div className="edu-school">{school}</div>
      </div>
    </div>
  );
}
