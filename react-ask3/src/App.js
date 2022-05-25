import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import Login from './components/Login';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <p>

      </p>
      <div>
      </div>
    </div >
  );
}

export default App;

