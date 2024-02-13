import React from 'react';
import '../assets/style.scss';
import '../assets/pp.scss';

// This function will called only once

export const PP = () => {
    return (
        <div className='publicationData container'>
            {/* <div className='publicationData container' > */}
            <div className='text-center mx-auto mt-5 pt-5'>
                <h2>My Publications</h2>
            </div>
            <section class='section1 flex-section text-image my-5 py-2' >
                <div class='column-left' >
                    <img src="https://scorpio-95.github.io/My-Portfolio/img/pp1.jpeg" alt="" />
                </div>
                <div class='column-right'>
                    <h3>ACHIEVING DATA GOVERNANCE FUNCTIONALITIES USING GOOGLE CLOUD AND APPS</h3>
                    <p>This paper deals with structuring abundant unstructured data on Google cloud using Google technologies...</p>
                    <a target='_blank' rel="noreferrer" href="http://www.iraj.in/journal/journal_file/journal_pdf/3-377-150372939041-44.pdf"><button class="cta-btn">Learn More</button></a>
                </div>

            </section>
            <section class=' section2 flex-section text-image my-5 py-2'>
                <div class='column-left'>
                    <img src="https://scorpio-95.github.io/My-Portfolio/img/pp2.jpg" alt="" />
                </div>
                <div class='column-right '>
                    <h3> APPLICATION OF GOOGLE CLOUD AND GOOGLE APPS IN DATA STRUCTURING</h3>
                    <p>This paper presents the way of using Google cloud services and google apps in ordered to obtain uniform good quality data that can be further used for analysis purpose.</p>
                    <a target='_blank' rel="noreferrer" href="http://www.iosrjournals.org/iosr-jce/papers/Vol19-issue1/Version-2/D1901022328.pdf"><button class="cta-btn">Learn More</button></a>
                </div>

            </section>



        </div>
    )
}