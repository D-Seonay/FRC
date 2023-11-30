import './App.css';
import Cards from './components/Cards';
import {favoriteCards, a } from './components/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flip Revision Cards</h1>
        <p>Learn to code at home</p>
        <div className="cards">
          <Cards/>
        </div>
      </header>
    </div>
  );
}

export default App;
