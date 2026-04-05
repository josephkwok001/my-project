import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { CardProvider } from './context/CardContext';
import StudyPage from './pages/StudyPage';
import CardsPage from './pages/CardsPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    
    <BrowserRouter basename="/my-project">  
      <CardProvider>
        <div className="app-container">
          <h1>Flashcards</h1>

          <nav className="nav-bar">
            <NavLink to="/">Study</NavLink>
            <NavLink to="/cards">My Cards</NavLink>
            <NavLink to="/stats">Stats</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<StudyPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </div>
      </CardProvider>
    </BrowserRouter>
  );


  /*
  BrowerserRouter enables routing
  CardProvider is a useContext, allows all pages can access card data
  
  <nav className="nav-bar">
    <NavLink to="/">Study</NavLink>         // Link to "/"
    <NavLink to="/cards">My Cards</NavLink> // Link to "/cards"
    <NavLink to="/stats">Stats</NavLink>    // Link to "/stats"
  </nav>
  
  <Routes>                                         // "Which page to show?"
    <Route path="/" element={<StudyPage />} />     // "/" → StudyPage
    <Route path="/cards" element={<CardsPage />} /> // "/cards" → CardsPage
    <Route path="/stats" element={<StatsPage />} /> // "/stats" → StatsPage
  </Routes>
  */

  
}

export default App;
