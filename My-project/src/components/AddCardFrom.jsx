import { useState, useRef } from 'react';

function AddCardForm({ addCard }) {
    const [koreanWord, setKoreanWord] = useState('');
    const [englishWord, setEnglishWord] = useState('');

    const koreanInputRef = useRef(null);

    function handleSubmit() {
        addCard(koreanWord, englishWord);

        // Clear the inputs after submitting
        setKoreanWord('');
        setEnglishWord('');

        // Focus the Korean input so user can immediately type the next card
        koreanInputRef.current.focus();
    }

    return (
        <div className="add-card-form">
            <h3>Add New Card</h3>
            <input
                ref={koreanInputRef}
                value={koreanWord}
                onChange={(e) => setKoreanWord(e.target.value)}     // e is the event handler, e.target is the input element, and e.target.value is the current text in the box. It updates the state which re-renders the component which updates the input display
                type="text"
                placeholder="Korean word"
            />
            <input
                value={englishWord}
                onChange={(e) => setEnglishWord(e.target.value)}
                type="text"
                placeholder="English translation"
            />
            <button onClick={handleSubmit}>Add flashcard</button>
        </div>
    );

}

export default AddCardForm;


/*
User types "감사" → koreanWord state = "감사"
User types "Thanks" → englishWord state = "Thanks"
User clicks button
  → handleSubmit() runs
    → addCard("감사", "Thanks")  ← this runs in App.jsx, adds to the cards array
    → setKoreanWord('')          ← clears the form
    → setEnglishWord('')         ← clears the form
*/

