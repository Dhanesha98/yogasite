import './App.css';
import Hero from './components/Hero/Hero';
import Classes from './components/Classes/Classes';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Instructors from './components/Instructors/Instructors';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Classes/>
          <Reasons/>
          <Plans/>
          <Instructors/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
