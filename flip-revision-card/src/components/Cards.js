import React, { useState } from 'react';
import '../App.css';

function Cards() {
    const data = require('../data/data.json');

    const [cardData, setCardData] = useState(
        data.map(item => ({
            id: item.id,
            word: item.word,
            definition: item.definition,
            favorite: item.favorite === "true",
            isFlipped: false // Ajout de l'état pour indiquer si la carte est retournée ou non
        }))
    );

    const handleCardClick = (index) => {
        const updatedCardData = [...cardData];
        updatedCardData[index].isFlipped = !updatedCardData[index].isFlipped;
        setCardData(updatedCardData);
    };

    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div
                    key={card.id}
                    className={`card ${card.isFlipped ? 'flipped' : ''}`}
                    onClick={() => handleCardClick(index)}
                >
                    <h1>{card.id}</h1>
                    <div className="card-front">
                        <h3>{card.word}</h3>
                    </div>
                    <div className="card-back">
                        <h3>{card.definition}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
