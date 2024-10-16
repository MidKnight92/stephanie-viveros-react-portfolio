import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
      <Nav />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact'  element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/resume' element={<Resume/>} />
        </Routes>
    </Router>
    </>
  )
}


export default App
