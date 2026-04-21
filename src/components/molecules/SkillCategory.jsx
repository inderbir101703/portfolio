import Tag from '../atoms/Tag';
import { useTilt } from '../../hooks/useTilt';

export default function SkillCategory({ icon, title, tags }) {
  const tilt = useTilt(6);

  return (
    <div className="skill-cat" {...tilt}>
      <div className="cat-icon">{icon}</div>
      <div className="cat-title">{title}</div>
      <div className="tags">
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  );
}
