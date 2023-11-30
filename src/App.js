import { InputNumber } from 'antd';
import FancySelect from './FancySelect';
import RingSelect from './RingSelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Experimental Select Component</h3>
      <article>
        <InputNumber
          prefixCls="FancySelectGroup"
          addonBefore={
            <FancySelect
              options={[
                { label: 'Year', value: 'y' },
                { label: 'Month', value: 'M' },
                { label: 'Day', value: 'd' },
                // { label: 'Hour', value: 'h' },
                // { label: 'Minute', value: 'm' },
                // { label: 'Second', value: 's' },
              ]}
            />
          }
          placeholder="Please input time"
          min={0}
          max={30}
          size="large"
        />
      </article>
      <article>
        <RingSelect
          options={[
            { label: 'Year', value: 'y' },
            { label: 'Month', value: 'M' },
            { label: 'Day', value: 'd' },
            { label: 'Hour', value: 'h' },
            { label: 'Minute', value: 'm' },
            { label: 'Second', value: 's' },
          ]}
        />
      </article>
    </div>
  );
}

export default App;
