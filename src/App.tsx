import './App.css';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Statistics />
        <Editor />
      </main>
    </div>
  );
}

export default App;
