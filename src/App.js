import './App.css';
import Hero from './components/Hero/Hero';
import Classes from './components/Classes/Classes';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Classes/>
          <Reasons/>
          <Plans/>
    </div>
  );
}

export default App;
