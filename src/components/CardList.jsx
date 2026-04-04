import { useState, useRef, useEffect } from 'react';
import { useCards } from '../context/CardContext';

function CardList() {
  const { cards, deleteCard, editCard } = useCards();
  const [editingId, setEditingId] = useState(null);
  const [editFront, setEditFront] = useState('');
  const [editBack, setEditBack] = useState('');

  const editFrontRef = useRef(null);

  useEffect(() => {
    if (editingId !== null && editFrontRef.current) {
      editFrontRef.current.focus();
    }
  }, [editingId]);

  function startEdit(card) {
    setEditingId(card.id);
    setEditFront(card.front);
    setEditBack(card.back);
  }

  function saveEdit(id) {
    editCard(id, editFront, editBack);
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
  }



  return (
  <div className="card-list-container">
    <h2>My Flashcards ({cards.length})</h2>
    <ul>
      {cards.map(card => (
        <li key={card.id}>
          {editingId === card.id ? (
            <>
              <input
                ref={editFrontRef}
                value={editFront}
                onChange={(e) => setEditFront(e.target.value)}
              />
              <input
                value={editBack}
                onChange={(e) => setEditBack(e.target.value)}
              />
              <div className="card-actions">
                <button onClick={() => saveEdit(card.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <span className="card-content">{card.front} - {card.back}</span>
              <div className="card-actions">
                <button onClick={() => startEdit(card)}>Edit</button>
                <button onClick={() => deleteCard(card.id)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
);
}



export default CardList;