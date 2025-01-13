// src/components/Card.js
import React from 'react';

const Card = ({ card, onClick }) => {
    return (
        <div 
            className={`card ${card.faceUp ? 'face-up' : 'face-down'}`} 
            onClick={onClick}
        >
            {card.faceUp ? `${card.value} of ${card.suit}` : 'Card'}
        </div>
    );
};

export default Card;
