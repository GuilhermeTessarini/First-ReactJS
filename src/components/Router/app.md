import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Router/Home';
import Company from './components/Router/Company';
import Contact from './components/Router/Contact';
import Navbar from './components/Router/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/company'>Company</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          <Footer/>
        </Router>

      </header>
    </div>
  );
}

export default App;