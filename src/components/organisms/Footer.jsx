import { personal } from '../../data/resume';

export default function Footer() {
  const { email, links } = personal;

  const items = [
    { label: email,      href: `mailto:${email}`  },
    { label: 'GitHub',   href: links.github        },
    { label: 'LinkedIn', href: links.linkedin      },
    { label: 'LeetCode', href: links.leetcode      },
    { label: 'AI Project', href: links.aiProject   },
  ];

  return (
    <footer>
      <div className="container">
        <ul className="footer-links">
          {items.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-note">
          Built with React, Three.js &amp; Vite · Inderbir Singh Bhinder © 2025
        </p>
      </div>
    </footer>
  );
}
