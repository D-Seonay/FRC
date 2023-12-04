// App.js
import React, { useState } from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;