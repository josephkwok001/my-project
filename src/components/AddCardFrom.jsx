import { useState, useRef } from 'react';
import { useCards } from '../context/CardContext';

function AddCardForm() {
  const { addCard } = useCards();
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    // holds the text Gemini returns
    const [suggestion, setSuggestion] = useState('');
    // tracks whether the API call is in progress
    const [isLoading, setIsLoading] = useState(false);
    const frontInputRef = useRef(null);

    async function suggestBack() {
      // Don't call API if front is empty
      if (!front.trim()) return;
    
      setIsLoading(true);
      setSuggestion('');
    
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are a flashcard assistant. Given a word or phrase, reply with only a short, clear definition or translation suitable for the back of a flashcard. No extra explanation.\n\nWord or phrase: ${front}`,
                    },
                  ],
                },
              ],
            }),
          }
        );
    
        const data = await response.json();
        console.log('Gemini response:', data);
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (text) {
          setSuggestion(text);
        }
      } catch (error) {
        console.error('Gemini error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    function handleSubmit() {
        addCard(front, back);

        // Clear the inputs after submitting
        setFront('');
        setBack('');
        setSuggestion('');

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
            {suggestion && (
              <div className="ai-suggestion">
                <p>💡 {suggestion}</p>
                <button
                  type="button"
                  onClick={() => {
                    setBack(suggestion);
                    setSuggestion('');
                  }}
                >
                  Use this
                </button>
                <button type="button" onClick={() => setSuggestion('')}>
                  Discard
                </button>
              </div>
            )}
            <div className="back-input-row">
              <input
                value={back}
                onChange={(e) => {
                  setBack(e.target.value);
                  setSuggestion('');
                }}
                type="text"
                placeholder="Back"
              />
              <button
                type="button"
                onClick={suggestBack}
                disabled={isLoading || !front.trim()}
              >
                {isLoading ? 'Loading…' : 'AI Suggest'}
              </button>
            </div>
            <button onClick={handleSubmit}>Add flashcard</button>
        </div>
    );

}

export default AddCardForm;