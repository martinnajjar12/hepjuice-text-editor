import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Editor from './components/Editor';

function App() {
  const [cursor, setCursor] = useState('');
  const [editable, setEditable] = useState(false);

  const handleClick = () => {
    setCursor('');
    setEditable(false);
  };

  return (
    <div className="App" onClick={handleClick}>
      <Header />
      <main className="container">
        <Statistics />
        <Editor
          editable={editable}
          setEditable={setEditable}
          cursor={cursor}
          setCursor={setCursor}
        />
      </main>
    </div>
  );
}

export default App;
