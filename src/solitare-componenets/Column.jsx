// src/components/Column.js
import React from 'react';
import Card from './Card';

const Column = ({ cards, onCardClick }) => {
    return (
        <div className="column">
            {cards.map((card, index) => (
                <Card key={index} card={card} onClick={() => onCardClick(card, index)} />
            ))}
        </div>
    );
};

export default Column;
