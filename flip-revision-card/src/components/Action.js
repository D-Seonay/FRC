
// Créer un état pour stocker la valeur de recherche
const [searchValue, setSearchValue] = useState('');

// Créer une fonction de recherche
const searchCards = () => {
  // Utiliser la valeur de recherche pour filtrer les cartes
  const filteredCards = cards.filter(card => {
    // Vérifier si l'ID de la carte correspond à la valeur de recherche
    if (card.id === searchValue) {
      return true;
    }
    // Vérifier si le mot recherché est contenu dans le contenu de la carte
    if (card.content.includes(searchValue)) {
      return true;
    }
    return false;
  });

  // Utiliser les cartes filtrées pour afficher les résultats de recherche
    setCards(filteredCards);

};

// Afficher la barre de recherche dans votre composant
return (
  <div>
    <input
      type="text"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Rechercher..."
    />
    <button onClick={searchCards}>Rechercher</button>
  </div>
);
