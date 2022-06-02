import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import Bottom from './components/Bottom/Bottom';
import Footer from './components/Footers/Footers';
import Login from './components/Login';
import Navbar from './components/Navbar'
import Forum from './components/ForumPost/Forum';
import AddPost from './components/AddPost';
import Text from './components/Text/Text';
import Boxes from './components/Boxes/Boxes';
import Post from './components/Post/Post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Home /><Bottom /><Text /><Boxes /></>} />
          <Route path='/questions' element={<Forum />} />
          <Route path='/forum' element={<Post />}></Route>
          <Route path='/addpost' element={<AddPost />} />
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

