import React from 'react'
import MainContentComponent from '../components/MainContent/MainContentComponent';
import '../assets/scss/style.scss';
import data from '../content.json';
export const Home = () => {
  return (
    <>    
        <MainContentComponent {...data} />
    </>
  );
}

