import React from 'react';
import { useControllableValue } from 'ahooks';
import './RingSelect.css';

function RingSelect(props) {
  const { options = [] } = props;
  const [value = options[0]?.value, onChange] = useControllableValue(props);

  return <div className="RingSelect"></div>;
}

export default RingSelect;
