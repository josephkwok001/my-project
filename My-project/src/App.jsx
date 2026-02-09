import { useState, useEffect } from 'react';
import CardList from './components/CardList';
import AddCardFrom from './components/AddCardFrom';
import StudyCard from './components/StudyCard';
import './App.css';

function App() {

  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('flashcards');

    // Step 2: If we found saved cards, use them
    if (savedCards) {
      return JSON.parse(savedCards);  // Convert string back to array
    }

    // Step 3: If no saved cards, use default ones
    return [
      { id: "1", front: "안녕하세요", back: "Hello (formal)" },
      { id: "2", front: "감사합니다", back: "Thank you" },
      { id: "3", front: "네", back: "Yes" },
      { id: "4", front: "아니요", back: "No" }
    ];
  });

  useEffect(() => {
    // Save cards to localStorage whenever cards change
    localStorage.setItem('flashcards', JSON.stringify(cards));
  }, [cards]);  // This means "run this whenever cards changes"


  function addCard(korean, english) {

    const newCard = {
      id: cards.length + 1,  // or use Date.now() or crypto.randomUUID()
      front: korean,
      back: english
    };

    setCards([...cards, newCard]);  // The ...cards syntax means "copy all existing cards" and then add newCard at the end.

  }

  function deleteCard(id) {
    const filteredCards = cards.filter(card => card.id !== id);
    setCards(filteredCards);
  }

  function editCard(id, newFront, newBack) {
    const updatedCards = cards.map(card =>
      card.id === id
        ? { ...card, front: newFront, back: newBack }
        : card
    );
    setCards(updatedCards);
  }

  return (
    <div className="app-container">
      <h1>Korean Flashcards</h1>
      <AddCardFrom addCard={addCard} />
      <CardList cards={cards} deleteCard={deleteCard} editCard={editCard} />
      <StudyCard cards={cards} />
    </div>
  );
}

export default App;