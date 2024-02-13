import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './assets/style.scss';
<<<<<<< Updated upstream
import data from './content.json'
import { HOME } from './pages/Home';
import { PP } from './pages/pp'
import { PROJECTS } from './pages/projects'
=======
import data from './content.json';
import { Router } from './Router.js';

>>>>>>> Stashed changes
function App() {
  return (
    <>
    <Navbar {...data}/>
<<<<<<< Updated upstream
    <Routes>
      <Route path='/' element={<HOME {...data}/>}></Route>
      <Route path='/projects' element={<PROJECTS {...data}/>}></Route>
      <Route path='/paper-publications' element={<PP {...data}/>}></Route>
      <Route path='/Resume' element={<HOME {...data}/>}></Route>
      <Route path='/contact' element={<HOME {...data}/>}></Route>
    </Routes>
=======
    <Router />
>>>>>>> Stashed changes
    <Footer />
    </>
  );
}


export default App;
