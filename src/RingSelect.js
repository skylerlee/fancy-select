import React, { useState } from 'react';
import { useControllableValue } from 'ahooks';
import './RingSelect.css';

function RingSelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);
  const [active, setActive] = useState(false);

  const current = options.find((opt) => opt.value === value);
  const anglePerOption = (2 * Math.PI) / (options.length - 1);

  const getArcX = (angle, r) => {
    return Math.sin(angle) * r;
  };

  const getArcY = (angle, r) => {
    return Math.cos(angle) * r;
  };

  const getX = (idx) => {
    return getArcX(idx * anglePerOption, 100);
  };

  const getY = (idx) => {
    return getArcY(idx * anglePerOption, 100);
  };

  const handleItemClick = (e, idx, opt) => {
    if (opt !== undefined) {
      onChange(opt.value);
    }
  };

  return (
    <div className="RingSelect">
      <div className="RingSelect__Value" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        {current?.label}
      </div>
      {options
        .filter((opt) => opt.value !== value)
        .map((opt, idx) => (
          <div
            key={opt.value}
            className={`RingSelect__Option${active ? ' active' : ''}`}
            style={{ transform: `translate(${getX(idx) - 50}%, ${getY(idx) - 50}%)` }}
            onClick={(e) => handleItemClick(e, idx, options[idx])}
          >
            {opt.label}
          </div>
        ))}
    </div>
  );
}

export default RingSelect;
