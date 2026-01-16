import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import Home from './pages/Home';
import BodyPartDetails from './pages/BodyPartDetails';
import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/body/:partId" element={<BodyPartDetails />} />
            <Route path="/quiz/:partId" element={<QuizPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
