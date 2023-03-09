import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './assets/style.scss';
import data from './content.json'
import { HOME } from './pages/Home';
import { PP } from './pages/pp'
function App() {
  return (
    <>
    <Navbar {...data}/>
    <Routes>
      <Route path='/' element={<HOME {...data}/>}></Route>
      <Route path='/projects' element={<PP {...data}/>}></Route>
      <Route path='/paper-publications' element={<PP {...data}/>}></Route>
      <Route path='/Resume' element={<HOME {...data}/>}></Route>
      <Route path='/contact' element={<HOME {...data}/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
