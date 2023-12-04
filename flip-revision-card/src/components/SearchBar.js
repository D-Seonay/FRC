import React, { useState, useEffect } from 'react';

import data from '../data/data.json'; // Remplacez cela par le chemin de votre fichier JSON

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      // Fonction de filtrage des données en fonction du terme de recherche
      const results = data.filter(item =>
        (item.word?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.chapter?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setSearchResults(results);
    }, [searchTerm]);
  
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {searchResults.map(item => (
            <li key={item.id}>
              <h3>{item.word}</h3>
              <p>{item.definition}</p>
              <p>{item.chapter}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchBar;