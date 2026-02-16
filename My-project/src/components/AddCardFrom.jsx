import { useState } from 'react';

function AddCardForm({ addCard }) {
    const [koreanWord, setKoreanWord] = useState('');
    const [englishWord, setEnglishWord] = useState('');

    function handleSubmit() {
        addCard(koreanWord, englishWord);

        // Clear the inputs after submitting
        setKoreanWord('');
        setEnglishWord('');
    }

    return (
        <div className="add-card-form">
            <h3>Add New Card</h3>
            <input
                value={koreanWord}
                onChange={(e) => setKoreanWord(e.target.value)}
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