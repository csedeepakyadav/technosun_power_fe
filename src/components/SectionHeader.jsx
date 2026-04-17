const SectionHeader = ({ eyebrow, title, text, align = 'left' }) => (
  <div className={`section-header ${align === 'center' ? 'center' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

export default SectionHeader;
