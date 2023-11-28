import './FancySelect.css';

function FancySelect(props) {
  const { options = [] } = props;

  return (
    <div className="FancySelect">
      {
        options.map((opt, idx) => (
          <div key={opt.value} className={`${idx}`}>{opt.label}</div>
        ))
      }
    </div>
  );
}

export default FancySelect;
