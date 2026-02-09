import { useState } from 'react';

function AddCardForm( {addCard}) {
    const [koreanWord, setKoreanWord] = useState('');
    const [englishWord, setEnglishWord] = useState('');

    function handleSubmit() {
        addCard(koreanWord, englishWord);
        
        // Clear the inputs after submitting
        setKoreanWord('');
        setEnglishWord('');
    }
    
    return(
        <div>
            <input 
                value={koreanWord}  // This DISPLAYS what's currently in the koreanWord state, shows users what's in the box
                onChange={(e) => setKoreanWord(e.target.value)}  // updates the state when the user types. Everytime the user presses a key, the function runs
                // e.target.value = current text in the box

                type="text" 
                placeholder="korean definition"
                />
            <input
                value={englishWord}
                onChange={(e) => setEnglishWord(e.target.value)}
                type="text" 
                placeholder="english definition"
            />
            <button onClick={handleSubmit}>Add flashcard</button>
        </div>

    );

}

export default AddCardForm;