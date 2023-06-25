import './App.css';
import Leading from './components/Leading';
import Dash from './components/dash';
import Faq from './components/faq';
import Pricing from './components/pricing';
import Ratings from './components/ratings';

function App() {
  return (
    <div className="App">
      <Dash/>
      <Leading/>
      <Ratings/>
      <Faq/>
      <Pricing/>
    </div>
  );
}

export default App;
