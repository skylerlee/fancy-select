import { InputNumber } from 'antd';
import FancySelect from './FancySelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Experimental Select Component</h3>
      <article>
        <InputNumber
          addonBefore={
            <FancySelect
              options={[
                { label: 'Year', value: 'y' },
                { label: 'Month', value: 'm' },
                { label: 'Day', value: 'd' },
              ]}
            />
          }
          placeholder="Please input time"
          min={0}
          max={30}
          size="large"
        />
      </article>
    </div>
  );
}

export default App;
