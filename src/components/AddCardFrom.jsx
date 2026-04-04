import { useState, useRef } from 'react';
import { useCards } from '../context/CardContext';

function AddCardForm() {
  const { addCard } = useCards();
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const frontInputRef = useRef(null);

    function handleSubmit() {
        addCard(front, back);

        // Clear the inputs after submitting
        setFront('');
        setBack('');

        // Focus the front input so user can immediately type the next card
        frontInputRef.current.focus();
    }

    return (
        <div className="add-card-form">
            <h3>Add New Card</h3>
            <input
                ref={frontInputRef}
                value={front}
                onChange={(e) => setFront(e.target.value)}
                type="text"
                placeholder="Front"
            />
            <input
                value={back}
                onChange={(e) => setBack(e.target.value)}
                type="text"
                placeholder="Back"
            />
            <button onClick={handleSubmit}>Add flashcard</button>
        </div>
    );

}

export default AddCardForm;