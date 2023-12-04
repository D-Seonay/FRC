import React, { useState } from 'react';
import './Card.css';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={flipCard}
    >
      <div className="cardInner">
        <div className="cardFront">
          {frontContent}
        </div>
        <div className="cardBack">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
