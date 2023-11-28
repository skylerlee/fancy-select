import { useControllableValue } from 'ahooks';
import './FancySelect.css';

function FancySelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);

  const handleClick = (e, idx, opt) => {
    if (opt !== undefined) {
      onChange(opt.value);
    }
  };

  return (
    <div className="FancySelect">
      {options.map((opt, idx) => (
        <div
          key={opt.value}
          className={`FancySelect__Option${opt.value === value ? '--active' : ''}`}
          onClick={(e) => handleClick(e, idx, options[idx])}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
}

export default FancySelect;
