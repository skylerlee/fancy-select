import React from 'react';
import { useControllableValue } from 'ahooks';
import './RingSelect.css';

function RingSelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);

  const handleItemClick = (e, idx, opt) => {
    if (opt !== undefined) {
      onChange(opt.value);
    }
  };

  return (
    <div className="RingSelect">
      {options.map((opt, idx) => (
        <div
          key={opt.value}
          className={`RingSelect__Option${opt.value === value ? ' active' : ''}`}
          onClick={(e) => handleItemClick(e, idx, options[idx])}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
}

export default RingSelect;
