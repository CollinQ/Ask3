import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import Bottom from './components/Bottom/Bottom';
import Footer from './components/Footers/Footers';
import Login from './components/Login';
import Navbar from './components/Navbar'
import Forum from './components/ForumPost/Forum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Home /><Bottom /></>} />
          <Route path='/questions' element={<Forum/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
      </Router>

      <p>
      </p>
      <div>
        <Footer />
      </div>
    </div >
  );
}

export default App;

