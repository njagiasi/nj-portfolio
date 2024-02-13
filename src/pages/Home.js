<<<<<<< Updated upstream
import React from 'react'
import MainContentComponent from '../components/MainContentComponent';
import '../assets/style.scss';
import data from '../content.json'
export const HOME = () => {
    return (
        <>
            <MainContentComponent {...data} />
        </>
    )
}
=======
import React from 'react'
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroComponent';
import MainContentComponent from '../components/MainContentComponent';
import Navbar from '../components/Navbar';
import '../assets/style.scss';
import data from '../content.json';

export const Home =() => {
  return (
    <>
    <Navbar {...data}/>
    <HeroComponent {...data}/>
    <MainContentComponent {...data}/>
    <Footer />
    </>
  );
}

>>>>>>> Stashed changes
