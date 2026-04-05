import StudyCard from '../components/StudyCard';
import { useCards } from '../context/CardContext';
import { useState } from 'react';

function StudyPage() {
  const [studyAllMode, setStudyAllMode] = useState(false);

  return (
    <div>
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
  );
}

export default StudyPage;
