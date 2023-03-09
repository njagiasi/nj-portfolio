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