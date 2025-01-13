// src/components/GameBoard.js
import React, { useState, useEffect } from 'react';
import Column from './Column';

const GameBoard = () => {
    const [deck, setDeck] = useState([]);
    const [columns, setColumns] = useState([[], [], [], [], [], [], []]);
    const [stock, setStock] = useState([]);
    const [foundations, setFoundations] = useState([[], [], [], []]);

    useEffect(() => {
        // Initialize game state
        const newDeck = shuffleDeck(createDeck());
        const initialColumns = dealCardsToColumns(newDeck);
        setColumns(initialColumns);
        setStock(newDeck); // Remaining cards go to the stock
    }, []);

    const createDeck = () => {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const deck = [];

        for (let suit of suits) {
            for (let value of values) {
                deck.push({ suit, value, faceUp: false });
            }
        }
        return deck;
    };

    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    };

    const dealCardsToColumns = (deck) => {
        const columns = [[], [], [], [], [], [], []];
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j <= i; j++) {
                const card = deck.pop();
                if (j === i) {
                    card.faceUp = true;
                }
                columns[i].push(card);
            }
        }
        return columns;
    };

    const handleCardClick = (card, index) => {
        // Implement card click logic
    };

    return (
        <div className="game-board">
            {columns.map((cards, columnIndex) => (
                <Column key={columnIndex} cards={cards} onCardClick={handleCardClick} />
            ))}
        </div>
    );
};

export default GameBoard;
