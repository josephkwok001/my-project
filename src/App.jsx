import CardList from './components/CardList';
import AddCardFrom from './components/AddCardFrom';
import StudyCard from './components/StudyCard';
import Statistics from './components/Statistics';
import { CardProvider, useCards } from './context/CardContext';

function AppContent() {
  const { cardsToStudy, studyAllMode, setStudyAllMode } = useCards();

  return (
    <div className="app-container">
      <h1>Flashcards</h1>
      <div className="study-section">
        <div className="study-mode-toggle">
          <button
            type="button"
            onClick={() => setStudyAllMode(false)}
            className={!studyAllMode ? 'active' : ''}
          >
            Due today
          </button>
          <button
            type="button"
            onClick={() => setStudyAllMode(true)}
            className={studyAllMode ? 'active' : ''}
          >
            Study all
          </button>
        </div>
        <StudyCard />
      </div>
      <Statistics />
      <AddCardFrom />
      <CardList />
    </div>
  );
}

function App() {
  return (
    <CardProvider>
      <AppContent />
    </CardProvider>
  );
}

export default App;
