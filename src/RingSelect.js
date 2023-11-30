import React from 'react';
import { useControllableValue } from 'ahooks';
import './RingSelect.css';

function RingSelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);

  const current = options.find((opt) => opt.value === value);

  const handleItemClick = (e, idx, opt) => {
    if (opt !== undefined) {
      onChange(opt.value);
    }
  };

  return (
    <div className="RingSelect">
      <div className="RingSelect__Value">{current?.label}</div>
      {options.map((opt, idx) =>
        opt.value !== value ? (
          <div key={opt.value} className="RingSelect__Option" onClick={(e) => handleItemClick(e, idx, options[idx])}>
            {opt.label}
          </div>
        ) : null,
      )}
    </div>
  );
}

export default RingSelect;
