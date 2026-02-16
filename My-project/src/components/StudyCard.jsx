import { useState } from "react";

function StudyCard({ cards }) {

    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    function nextCard() {
        const nextId = index + 1;

        if (nextId >= cards.length) {
            setIndex(0);
        } else {
            setIndex(nextId);
        }

        setIsFlipped(false);
    }

    function prevCard() {
        const nextId = index - 1;

        if (nextId < 0) {
            setIndex(cards.length - 1);
        } else {
            setIndex(nextId);
        }

        setIsFlipped(false);
    }



    return (
        <div className="study-card-container">
            <div className="card-display" onClick={flipCard}>
                {isFlipped ? <p>{cards[index].back}</p> : <p>{cards[index].front}</p>}
            </div>
            <p className="card-counter">Card {index + 1} of {cards.length}</p>
            <button onClick={flipCard}>Flip Card</button>
            <button onClick={prevCard}>Previous Card</button>
            <button onClick={nextCard}>Next Card</button>
        </div>
    );


}

export default StudyCard;