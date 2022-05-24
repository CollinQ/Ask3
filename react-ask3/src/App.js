import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Questions from './pages/Questions';
import Login from './pages/Login';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/home' exact element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/questions' element={<Questions />} />
          </Routes>
        </Router>
        <h1>
          Ask3
        </h1>
      </header>
      <div>

      </div>
    </div >
  );
}

export default App;
