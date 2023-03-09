import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/style.scss';
import 'animate.css';


 // This function will called only once



export const PP = () => {
    const [animate__fadeOut, setColorchange] = useState(false);

      const fadeData = () =>{
        if(window.scrollY >= 300){
            setColorchange(true);
          }
          else{
            setColorchange(false);
          }
     }
     useEffect(() => {
        fadeData();
      }, []);
      window.addEventListener('scroll', fadeData);
    return (
        <div className= 'animate__fadeOut publicationData container'>
        {/* <div className='publicationData container' > */}
            <div className='text-center mx-auto mt-5 pt-5'>
            <h2>My Publications</h2>
            </div>
            <section class={ animate__fadeOut ? 'animate__animated animate__fadeOut flex-section text-image my-5 py-2' : 'flex-section text-image my-5 py-2 animate__animated animate__fadeIn animate__delay-1s'}>
                <div class={ animate__fadeOut ? 'column-left animate__animated animate__slideOutLeft animate__slow' : 'column-left animate__animated animate__slideInLeft animate__slow'}>
                    <img src="https://scorpio-95.github.io/My-Portfolio/img/pp1.jpeg" alt="" />
                </div>
                <div class={ animate__fadeOut ? 'column-right animate__animated animate__slideOutRight animate__slow' : 'column-right animate__animated animate__slideInRight animate__slow'}>
                    <h3>ACHIEVING DATA GOVERNANCE FUNCTIONALITIES USING GOOGLE CLOUD AND APPS</h3>
                    <p>This paper deals with structuring abundant unstructured data on Google cloud using Google technologies...</p>
                    <a target='_blank' rel="noreferrer" href="http://www.iraj.in/journal/journal_file/journal_pdf/3-377-150372939041-44.pdf"><button class="cta-btn">Learn More</button></a>
                </div>

            </section>
            <section class={ animate__fadeOut ? 'animate__animated animate__fadeIn flex-section text-image my-5 py-2' : 'flex-section text-image my-5 py-2 animate__animated animate__fadeOut'}>
                <div class={ animate__fadeOut ? 'column-left animate__animated animate__slideInLeft animate__slow' : 'column-left animate__animated animate__slideOutLeft animate__slow'}>
                    <img src="https://scorpio-95.github.io/My-Portfolio/img/pp2.jpg" alt="" />
                </div>
                <div class={ animate__fadeOut ? 'column-right animate__animated animate__slideInRight animate__slow' : 'column-right animate__animated animate__slideOutRight animate__slow'}>
                    <h3> APPLICATION OF GOOGLE CLOUD AND GOOGLE APPS IN DATA STRUCTURING</h3>
                    <p>This paper presents the way of using Google cloud services and google apps in ordered to obtain uniform good quality data that can be further used for analysis purpose.</p>
                    <a target='_blank' rel="noreferrer" href="http://www.iosrjournals.org/iosr-jce/papers/Vol19-issue1/Version-2/D1901022328.pdf"><button class="cta-btn">Learn More</button></a>
                </div>

            </section>



        </div>
    )
}