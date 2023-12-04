import React from 'react';
import { useControllableValue } from 'ahooks';
import './FancySelect.css';

function FancySelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);

  const activeIdx = options.findIndex((opt) => opt.value === value);
  const offsetRatio = 0.9;

  const getOffset = (idx) => {
    const offset = idx - activeIdx;
    const halfLength = Math.floor((options.length - 1) / 2);
    if (Math.abs(offset) > halfLength) {
      if (offset > 0) {
        return offset - options.length;
      } else {
        return offset + options.length;
      }
    }
    return offset;
  };

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
          className={`FancySelect__Option${opt.value === value ? ' active' : ''}`}
          style={{ transform: `translate(${getOffset(idx) * offsetRatio * 100 - 50}%, -50%)` }}
          onClick={(e) => handleItemClick(e, idx, opt)}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
}

export default FancySelect;
