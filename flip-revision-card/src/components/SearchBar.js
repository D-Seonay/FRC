import React, { useState, useEffect } from 'react';
import FlippableCard from './FlippableCard';

import data from '../data/data.json'; // Remplacez cela par le chemin de votre fichier JSON

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fonction de filtrage des données en fonction du terme de recherche
    const results = data.filter(
      (item) =>
        item.word?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.chapter?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
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
      <div className="cardContainer">
        {searchResults.map((item) => (
          <FlippableCard
            key={item.id}
            frontContent={
              <div>
                <p> Chaptire {item.chapter}</p>
                <p>N : {item.id}</p>
                <h3>{item.word}</h3>
              </div>
            }
            backContent={
                <p>{item.definition}</p>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
