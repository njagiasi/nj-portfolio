
import './App.css';
import Footer from './components/Footer';
import HeroComponent from './components/HeroComponent';
import MainContentComponent from './components/MainContentComponent';
import Navbar from './components/Navbar';
import './assets/style.scss';
import data from './content.json'

function App() {
  return (
    <>
    <Navbar {...data}/>
    <HeroComponent {...data}/>
    <MainContentComponent {...data}/>
    <Footer />
    </>
  );
}

export default App;
