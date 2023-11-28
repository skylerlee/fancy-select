import { useControllableValue } from "ahooks";
import './FancySelect.css';

function FancySelect(props) {
  const { options = [] } = props;
  const [ value = options[0]?.value, onChange ] = useControllableValue(props);

  return (
    <div className="FancySelect">
      {
        options.map((opt, idx) => (
          <div key={opt.value} className={`FancySelect__Option${opt.value === value ? '--active' : ''}`}>{opt.label}</div>
        ))
      }
    </div>
  );
}

export default FancySelect;
