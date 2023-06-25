import './App.css';
import Leading from './components/Leading';
import Contact from './components/contact';
import Dash from './components/dash';
import Faq from './components/faq';
import Footer from './components/footer';
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
      <Contact/>
      <Footer/>
      <p style={{margin:'30px',color:'grey'}}>Made with Love By Figmaland All Right Reserved</p>
    </div>
  );
}

export default App;
