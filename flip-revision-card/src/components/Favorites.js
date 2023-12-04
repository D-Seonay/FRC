import React, { useState, useEffect } from 'react';
import data from '../data/data.json';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Récupération des favoris depuis le stockage local au chargement de la page
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Sauvegarde des favoris dans le stockage local à chaque modification
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.word}
            {item.definition}
            {item.chapter}  

            {favorites.find((fav) => fav.id === item.id) ? (
              <button onClick={() => removeFromFavorites(item)}>Retirer des favoris</button>
            ) : (
              <button onClick={() => addToFavorites(item)}>Ajouter aux favoris</button>
            )}
          </li>
        ))}
      </ul>
      <h2>Favoris</h2>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>{fav.word}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
