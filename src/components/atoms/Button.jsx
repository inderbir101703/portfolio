export default function Button({ href, variant = 'outline', children, target = '_blank' }) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`btn btn-${variant}`}
    >
      {children}
    </a>
  );
}
