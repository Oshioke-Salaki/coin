import './App.css';
import CreatePort from './CreatePort';
import CryptoList from './CryptoList';
import Earning from './Earning';
import GetStarted from './GetStarted';
import Hero from './Hero';
import Navbar from './Navbar';
import Trusted from './Trusted';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CryptoList />
      <Earning />
      <CreatePort />
      <Trusted />
      <GetStarted />
    </div>
  );
}

export default App;
