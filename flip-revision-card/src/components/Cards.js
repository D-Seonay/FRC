import React, { useState, useEffect } from 'react';


const Cards = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    // Récupération des données depuis le fichier JSON au chargement de la page
    fetch('../data/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  const addToFavorites = (id) => {
    const favoriteItem = data.find((item) => item.id === id);
    if (favoriteItem && !favorites.some((fav) => fav.id === id)) {
      setFavorites([...favorites, favoriteItem]);
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
  };

  const flipCard = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="cardContainer">
      {data.map((item) => (
        <div key={item.id} className={`card ${flippedCard === item.id ? 'flipped' : ''}`}>
          <div className="cardInner" onClick={() => flipCard(item.id)}>
            <div className="cardFront">
              <h3>{item.word}</h3>
              
              {favorites.some((fav) => fav.id === item.id) ? (
                <button onClick={() => removeFromFavorites(item.id)}>Retirer des favoris</button>
              ) : (
                <button onClick={() => addToFavorites(item.id)}>Ajouter aux favoris</button>
              )}
            </div>
            <div className="cardBack">
              {/* Contenu du verso de la carte (si nécessaire) */}
              {/* Exemple : <p>Détails supplémentaires...</p> */}
              <p>{item.definition}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="favorites">
        <h2>Favoris</h2>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>{fav.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
