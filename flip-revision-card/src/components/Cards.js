import React, { useState } from 'react';
import '../App.css';

function Cards() {
    const data = require('../data/data.json');

    const [cardData, setCardData] = useState(
        data.map(item => ({
            id: item.id,
            word: item.word,
            definition: item.definition,
            favorite: false,
            isFlipped: false
        }))
    );

    const handleCardClick = (index) => {
        const updatedCardData = [...cardData];
        updatedCardData[index].isFlipped = !updatedCardData[index].isFlipped;
        setCardData(updatedCardData);
    };

    const handleFavoriteClick = (index) => {
        const updatedCardData = [...cardData];
        updatedCardData[index].favorite = !updatedCardData[index].favorite;
        setCardData(updatedCardData);
    };

    const handleRemoveFavoriteClick = (index) => {
        const updatedCardData = [...cardData];
        updatedCardData[index].favorite = false;
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
                        {card.favorite === false ? (
                            <span onClick={() => handleFavoriteClick(index)}>&#x2661;</span>
                        ) : (
                            <span onClick={() => handleRemoveFavoriteClick(index)}>&#x2665;</span>
                        )}
                    </div>
            ))}
        </div>
    );
}
export default Cards;
