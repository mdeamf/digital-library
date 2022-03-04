import './styles.scss';

const SectionHeader = ({ title, invert }) => {
  return (
    <div className="section-header">
      <h1 className="display-5">
        <span>
          {title}
          <span className={`underscore ${invert ? 'invert' : ''}`}>_</span>
        </span>
      </h1>
    </div>
  );
};

export default SectionHeader;
