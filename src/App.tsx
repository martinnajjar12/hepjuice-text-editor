import { IconContext } from 'react-icons';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <div className="App">
        <Header />
        <h1>Hello World</h1>
      </div>
    </IconContext.Provider>
  );
}

export default App;
