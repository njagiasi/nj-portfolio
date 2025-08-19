import './App.css';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './assets/scss/style.scss';
import { ThemeProvider } from "./context/themeProvider";
import { Home } from './pages/Home';

function App() {
  
  return (
    <>
    <ThemeProvider>
    <div className='page-wrapper'>
    <Navbar/>
    <Home />
    {/* <Footer /> */}
    </div>
    </ThemeProvider>
    </>
  );
}


export default App;
