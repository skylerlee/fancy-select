import React, { useState } from 'react';
import { useControllableValue } from 'ahooks';
import './RingSelect.css';

function RingSelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);
  const [inCore, setInCore] = useState(false);
  const [inStar, setInStar] = useState(false);
  const [inMask, setInMask] = useState(false);

  const current = options.find((opt) => opt.value === value);

  const active = inCore || inStar || inMask;

  const anglePerOption = (2 * Math.PI) / (options.length - 1);
  const phase = 0.12;
  const radius = 135;

  const getArcX = (angle, r) => {
    return Math.sin(angle) * r;
  };

  const getArcY = (angle, r) => {
    return Math.cos(angle) * r;
  };

  const getX = (idx) => {
    return getArcX(phase + idx * anglePerOption, radius);
  };

  const getY = (idx) => {
    return getArcY(phase + idx * anglePerOption, radius);
  };

  const handleItemClick = (e, idx, opt) => {
    if (opt !== undefined) {
      onChange(opt.value);
    }
  };

  return (
    <div className="RingSelect">
      <div className="RingSelect__Value" onMouseEnter={() => setInCore(true)} onMouseLeave={() => setInCore(false)}>
        {current?.label}
      </div>
      {options
        .filter((opt) => opt.value !== value)
        .map((opt, idx) => (
          <div
            key={opt.value}
            className={`RingSelect__Option${active ? ' active' : ''}`}
            style={{
              transform: active ? `translate(${getX(idx) - 50}%, ${getY(idx) - 50}%)` : 'translate(-50%, -50%)',
            }}
            onClick={(e) => handleItemClick(e, idx, opt)}
            onMouseEnter={() => setInStar(true)}
            onMouseLeave={() => setInStar(false)}
          >
            {opt.label}
          </div>
        ))}
      {active ? (
        <div className="RingSelect__Mask" onMouseEnter={() => setInMask(true)} onMouseLeave={() => setInMask(false)} />
      ) : null}
    </div>
  );
}

export default RingSelect;
