import { useControllableValue } from 'ahooks';
import './FancySelect.css';

function FancySelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);

  const handleItemClick = (e, idx, opt) => {
    if (opt !== undefined) {
      onChange(opt.value);
    }
  };

  const handleWheel = (e) => {
    const ratio = e.deltaY / 100;
    let step = 0;
    if (ratio > 1) {
      step = 1;
    } else if (ratio < -1) {
      step = -1;
    }
    const currentIdx = options.findIndex((opt) => opt.value === value);
    const nextIdx = (currentIdx + step + options.length) % options.length;
    const nextOpt = options[nextIdx];
    onChange(nextOpt?.value);
  };

  return (
    <div className="FancySelect" onWheel={handleWheel}>
      {options.map((opt, idx) => (
        <div
          key={opt.value}
          className={`FancySelect__Option${opt.value === value ? '--active' : ''}`}
          onClick={(e) => handleItemClick(e, idx, options[idx])}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
}

export default FancySelect;
