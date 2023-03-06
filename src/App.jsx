import './App.css';
import CreatePort from './CreatePort';
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
      <CreatePort />
    </div>
  );
}

export default App;
