import FancySelect from './FancySelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <article>
        <FancySelect options={[
          { label: 'Year', value: 'y' },
          { label: 'Month', value: 'm' },
          { label: 'Day', value: 'd' },
        ]} />
      </article>
    </div>
  );
}

export default App;
