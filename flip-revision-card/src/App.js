// App.js
import React, { useState } from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import FlippableCard from './components/FlippableCard';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <h1>Flip Revision Card</h1>
      <SearchBar search={search} setSearch={setSearch} />

    </div>
  );
}

export default App;