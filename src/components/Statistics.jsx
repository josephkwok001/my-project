function Statistics({ cards }) {
    const totalCards = cards.length;
    const dueCards = cards.filter(card => new Date(card.nextReview) <= new Date()).length;
    const newCards = cards.filter(card => card.repetitions === 0).length;
    const mastered = cards.filter(card => card.repetitions >= 3).length;

    return (
        <div className="stats-container">
            <h2>Statistics</h2>
            <div className="stats-grid">
                <div className="stats-card">
                    <span>Total Cards</span>
                    <span className="stat-value">{totalCards}</span>
                </div>
                <div className="stats-card">
                    <span>Due Today</span>
                    <span className="stat-value">{dueCards}</span>
                </div>
                <div className="stats-card">
                    <span>New Cards</span>
                    <span className="stat-value">{newCards}</span>
                </div>
                <div className="stats-card">
                    <span>Mastered</span>
                    <span className="stat-value">{mastered}</span>
                </div>
            </div>
        </div>
    );
}

export default Statistics;