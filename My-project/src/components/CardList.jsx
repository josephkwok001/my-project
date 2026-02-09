import { useState } from 'react';
function CardList({ cards, deleteCard, editCard }) {
  const [editingId, setEditingId] = useState(null);
  const [editFront, setEditFront] = useState('');
  const [editBack, setEditBack] = useState('');

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
    <div>
      <h2>My Flashcards ({cards.length})</h2>
      <ul>
        {cards.map(card => (
          <li key={card.id}>
            {editingId === card.id ? (
              <>
                <input
                  value={editFront}
                  onChange={(e) => setEditFront(e.target.value)}
                />
                <input
                  value={editBack}
                  onChange={(e) => setEditBack(e.target.value)}
                />
                <button onClick={() => saveEdit(card.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {card.front} - {card.back}
                <button onClick={() => startEdit(card)}>Edit</button>
                <button onClick={() => deleteCard(card.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default CardList;