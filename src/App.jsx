import './App.css';
import CryptoList from './CryptoList';
import Hero from './Hero';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CryptoList />
    </div>
  );
}

export default App;
