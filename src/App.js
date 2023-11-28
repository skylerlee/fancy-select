import FancySelect from './FancySelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <FancySelect options={[
          { label: 'Year', value: 'y' },
          { label: 'Month', value: 'm' },
          { label: 'Day', value: 'd' },
        ]} />
      </p>
    </div>
  );
}

export default App;
