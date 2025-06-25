import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUIT_COLORS = { '♠': 'black', '♣': 'black', '♥': 'red', '♦': 'red' };

// Styled Components
const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e7e34, #155724);
  padding: 1rem;
  font-family: 'Arial', sans-serif;
`;

const GameWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MoveCounter = styled.span`
  font-size: 1.1rem;
`;

const NewGameButton = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const WinMessage = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  div {
    background: #ffc107;
    color: black;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const DeckWasteArea = styled.div`
  display: flex;
  gap: 1rem;
`;

const FoundationsArea = styled.div`
  display: flex;
  gap: 1rem;
`;

const TableauArea = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const TableauColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 8rem;
`;

const CardContainer = styled.div`
  width: 4rem;
  height: 6rem;
  border-radius: 0.5rem;
  border: 2px solid ${props => props.isEmpty ? '#ffffff80' : '#666'};
  border-style: ${props => props.isEmpty ? 'dashed' : 'solid'};
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  user-select: none;
  transition: all 0.2s ease;
  opacity: ${props => props.isDragging ? 0.5 : 1};
  transform: ${props => props.isHovered ? 'scale(1.05)' : 'scale(1)'};
  margin-top: ${props => props.stackOffset || '0'};
  z-index: ${props => props.zIndex || 0};
  position: relative;

  &:hover {
    transform: ${props => props.clickable ? 'scale(1.05)' : 'scale(1)'};
  }
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  background: ${props => props.faceUp ? 'white' : 'linear-gradient(135deg, #1e3a8a, #1e40af)'};
  border: ${props => props.faceUp ? '2px solid #9ca3af' : '2px solid #3b82f6'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.faceUp ? '0.25rem' : '0'};
  color: ${props => props.cardColor || 'black'};
  font-weight: bold;
  font-size: 0.75rem;
`;

const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardCorner = styled.div`
  display: flex;
  justify-content: space-between;
  
  &.bottom {
    transform: rotate(180deg);
  }
`;

const CardCenter = styled.div`
  text-align: center;
  font-size: 1.125rem;
`;

const EmptySlot = styled.div`
  width: 4rem;
  height: 6rem;
  border: 2px dashed #ffffff80;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${props => props.large ? '1.5rem' : '1rem'};
`;

const Instructions = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: white;
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.5;
`;

// Game Logic Functions
const createDeck = () => {
  const deck = [];
  SUITS.forEach(suit => {
    RANKS.forEach((rank, index) => {
      deck.push({
        id: `${suit}-${rank}`,
        suit,
        rank,
        value: index + 1,
        faceUp: false
      });
    });
  });
  return shuffleDeck(deck);
};

const shuffleDeck = (deck) => {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
};

// Card Component
const Card = ({ card, onClick, onDragStart, onDragEnd, isDragging, stackOffset, zIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!card) {
    return <EmptySlot />;
  }

  return (
    <CardContainer
      clickable={card.faceUp}
      isDragging={isDragging}
      isHovered={isHovered}
      stackOffset={stackOffset}
      zIndex={zIndex}
      onClick={onClick}
      draggable={card.faceUp}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardFace
        faceUp={card.faceUp}
        cardColor={SUIT_COLORS[card.suit] === 'red' ? '#dc2626' : '#1f2937'}
      >
        {card.faceUp ? (
          <CardContent>
            <CardCorner>
              <span>{card.rank}</span>
              <span>{card.suit}</span>
            </CardCorner>
            <CardCenter>{card.suit}</CardCenter>
            <CardCorner className="bottom">
              <span>{card.rank}</span>
              <span>{card.suit}</span>
            </CardCorner>
          </CardContent>
        ) : null}
      </CardFace>
    </CardContainer>
  );
};

// Main Solitaire Component
const Solitare = () => {
  const [deck, setDeck] = useState([]);
  const [waste, setWaste] = useState([]);
  const [foundations, setFoundations] = useState([[], [], [], []]);
  const [tableau, setTableau] = useState([[], [], [], [], [], [], []]);
  const [draggedCard, setDraggedCard] = useState(null);
  const [draggedFrom, setDraggedFrom] = useState(null);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const initializeGame = useCallback(() => {
    const newDeck = createDeck();
    const newTableau = [[], [], [], [], [], [], []];
    
    // Deal cards to tableau
    let deckIndex = 0;
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row <= col; row++) {
        const card = { ...newDeck[deckIndex] };
        if (row === col) card.faceUp = true; // Top card face up
        newTableau[col].push(card);
        deckIndex++;
      }
    }

    setTableau(newTableau);
    setDeck(newDeck.slice(deckIndex));
    setWaste([]);
    setFoundations([[], [], [], []]);
    setMoves(0);
    setGameWon(false);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    // Check for win condition
    const totalFoundationCards = foundations.reduce((sum, foundation) => sum + foundation.length, 0);
    if (totalFoundationCards === 52) {
      setGameWon(true);
    }
  }, [foundations]);

  const drawFromDeck = () => {
    if (deck.length === 0) {
      // Flip waste back to deck
      setDeck(waste.slice().reverse().map(card => ({ ...card, faceUp: false })));
      setWaste([]);
    } else {
      const newCard = { ...deck[0], faceUp: true };
      setWaste([...waste, newCard]);
      setDeck(deck.slice(1));
    }
    setMoves(moves + 1);
  };

  const canPlaceOnFoundation = (card, foundationIndex) => {
    const foundation = foundations[foundationIndex];
    if (foundation.length === 0) {
      return card.rank === 'A';
    }
    const topCard = foundation[foundation.length - 1];
    return card.suit === topCard.suit && card.value === topCard.value + 1;
  };

  const canPlaceOnTableau = (card, tableauIndex) => {
    const tableauCol = tableau[tableauIndex];
    if (tableauCol.length === 0) {
      return card.rank === 'K';
    }
    const topCard = tableauCol[tableauCol.length - 1];
    return SUIT_COLORS[card.suit] !== SUIT_COLORS[topCard.suit] && card.value === topCard.value - 1;
  };

  const handleCardDragStart = (card, from) => {
    setDraggedCard(card);
    setDraggedFrom(from);
  };

  const handleCardDragEnd = () => {
    setDraggedCard(null);
    setDraggedFrom(null);
  };

  const moveCard = (from, to, card) => {
    if (from.type === 'waste') {
      setWaste(waste.slice(0, -1));
    } else if (from.type === 'tableau') {
      const newTableau = [...tableau];
      const fromCol = newTableau[from.index];
      const cardIndex = fromCol.findIndex(c => c.id === card.id);
      const cardsToMove = fromCol.slice(cardIndex);
      newTableau[from.index] = fromCol.slice(0, cardIndex);
      
      // Flip the next card if it exists and is face down
      if (newTableau[from.index].length > 0) {
        const topCard = newTableau[from.index][newTableau[from.index].length - 1];
        if (!topCard.faceUp) {
          topCard.faceUp = true;
        }
      }
      
      if (to.type === 'tableau') {
        newTableau[to.index] = [...newTableau[to.index], ...cardsToMove];
      } else if (to.type === 'foundation') {
        const newFoundations = [...foundations];
        newFoundations[to.index] = [...newFoundations[to.index], card];
        setFoundations(newFoundations);
      }
      setTableau(newTableau);
    }
    setMoves(moves + 1);
  };

  const handleFoundationClick = (foundationIndex) => {
    if (waste.length > 0) {
      const topWasteCard = waste[waste.length - 1];
      if (canPlaceOnFoundation(topWasteCard, foundationIndex)) {
        moveCard({ type: 'waste' }, { type: 'foundation', index: foundationIndex }, topWasteCard);
      }
    }
  };

  const handleTableauClick = (tableauIndex, cardIndex) => {
    const card = tableau[tableauIndex][cardIndex];
    if (!card.faceUp) return;

    // Try to move to foundation automatically
    for (let i = 0; i < 4; i++) {
      if (canPlaceOnFoundation(card, i)) {
        moveCard({ type: 'tableau', index: tableauIndex }, { type: 'foundation', index: i }, card);
        return;
      }
    }
  };

  const handleWasteClick = () => {
    if (waste.length === 0) return;
    const topCard = waste[waste.length - 1];
    
    // Try to move to foundation automatically
    for (let i = 0; i < 4; i++) {
      if (canPlaceOnFoundation(topCard, i)) {
        moveCard({ type: 'waste' }, { type: 'foundation', index: i }, topCard);
        return;
      }
    }
  };

  const handleTableauDrop = (e, tableauIndex) => {
    e.preventDefault();
    if (!draggedCard || !draggedFrom) return;

    if (canPlaceOnTableau(draggedCard, tableauIndex)) {
      moveCard(draggedFrom, { type: 'tableau', index: tableauIndex }, draggedCard);
    }
  };

  const handleFoundationDrop = (e, foundationIndex) => {
    e.preventDefault();
    if (!draggedCard || !draggedFrom) return;

    if (canPlaceOnFoundation(draggedCard, foundationIndex)) {
      moveCard(draggedFrom, { type: 'foundation', index: foundationIndex }, draggedCard);
    }
  };

  return (
    <GameContainer>
      <GameWrapper>
        {/* Header */}
        <Header>
          <Title>Klondike Solitaire</Title>
          <HeaderControls>
            <MoveCounter>Moves: {moves}</MoveCounter>
            <NewGameButton onClick={initializeGame}>
              New Game
            </NewGameButton>
          </HeaderControls>
        </Header>

        {gameWon && (
          <WinMessage>
            <div>
              🎉 Congratulations! You Won in {moves} moves! 🎉
            </div>
          </WinMessage>
        )}

        {/* Top Row - Deck, Waste, and Foundations */}
        <TopRow>
          <DeckWasteArea>
            {/* Deck */}
            <div onClick={drawFromDeck}>
              {deck.length > 0 ? (
                <Card card={{ ...deck[0], faceUp: false }} />
              ) : (
                <EmptySlot large>♻</EmptySlot>
              )}
            </div>

            {/* Waste */}
            <div onClick={handleWasteClick}>
              {waste.length > 0 ? (
                <Card 
                  card={waste[waste.length - 1]} 
                  onDragStart={() => handleCardDragStart(waste[waste.length - 1], { type: 'waste' })}
                  onDragEnd={handleCardDragEnd}
                  isDragging={draggedCard?.id === waste[waste.length - 1]?.id}
                />
              ) : (
                <EmptySlot />
              )}
            </div>
          </DeckWasteArea>

          {/* Foundations */}
          <FoundationsArea>
            {foundations.map((foundation, index) => (
              <div
                key={index}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleFoundationDrop(e, index)}
                onClick={() => handleFoundationClick(index)}
              >
                {foundation.length > 0 ? (
                  <Card card={foundation[foundation.length - 1]} />
                ) : (
                  <EmptySlot large>{SUITS[index]}</EmptySlot>
                )}
              </div>
            ))}
          </FoundationsArea>
        </TopRow>

        {/* Tableau */}
        <TableauArea>
          {tableau.map((column, colIndex) => (
            <TableauColumn
              key={colIndex}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleTableauDrop(e, colIndex)}
            >
              {column.length === 0 ? (
                <EmptySlot />
              ) : (
                column.map((card, cardIndex) => (
                  <Card
                    key={card.id}
                    card={card}
                    onClick={() => handleTableauClick(colIndex, cardIndex)}
                    onDragStart={() => handleCardDragStart(card, { type: 'tableau', index: colIndex })}
                    onDragEnd={handleCardDragEnd}
                    isDragging={draggedCard?.id === card.id}
                    stackOffset={cardIndex > 0 ? '-3.75rem' : '0'}
                    zIndex={cardIndex}
                  />
                ))
              )}
            </TableauColumn>
          ))}
        </TableauArea>

        {/* Instructions */}
        <Instructions>
          <p>Click the deck to draw cards • Drag cards to move them • Click cards to auto-move to foundations</p>
          <p>Build foundations from Ace to King in the same suit • Build tableau in alternating colors, King to Ace</p>
        </Instructions>
      </GameWrapper>
    </GameContainer>
  );
};

export default Solitare;