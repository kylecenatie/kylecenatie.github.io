import React, { useState } from 'react';
import Card from './Card';

const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  let deck = [];
  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function Deck() {
  const [deck, setDeck] = useState(createDeck());

  function shuffle() {
    let newDeck = [...deck];
    shuffleDeck(newDeck);
    setDeck(newDeck);
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(13, 1fr)', gridGap: '10px' }}>
        {deck.map((card, index) => (
          <Card key={index} suit={card.suit} value={card.value} />
        ))}
      </div>
    </div>
  );
}

export default Deck;
