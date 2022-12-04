import './App.css';
import Header from './components/Header';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Statistics />
      </div>
    </div>
  );
}

export default App;
