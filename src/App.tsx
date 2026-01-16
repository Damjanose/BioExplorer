import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BodyPartDetails from './pages/BodyPartDetails';
import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body/:partId" element={<BodyPartDetails />} />
          <Route path="/quiz/:partId" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
