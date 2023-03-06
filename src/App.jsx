import './App.css';
import CryptoList from './CryptoList';
import Earning from './Earning';
import Hero from './Hero';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CryptoList />
      <Earning />
    </div>
  );
}

export default App;
