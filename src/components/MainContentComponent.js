<<<<<<< Updated upstream
import React from 'react';
import SkillsComponent from './SkillsComponent';
import { Link } from 'react-router-dom';

=======
import React from 'react'
import SkillsComponent from './SkillsComponent'
import { PaperPublication } from '../pages/PaperPublication';
>>>>>>> Stashed changes

export default function MainContentComponent(props) {
    const {heroImage, smallHeading, paragraph, projectImage}  = props.main_component;
  return (
    <>
    <div className='container pt-5 mt-5 main-content text-center'>
        <div className='container'>
            <div className='row main-content-row'>
            <div className='col-12 col-md-4 mt-4'>     
                <h1 dangerouslySetInnerHTML={{__html: smallHeading }}></h1>
                <p className='main-para'>{paragraph}</p>  
                <button type="btn" className='btn text-center mx-auto my-2'> Contact Me</button>
            </div>
            <div className='col-12 col-md-4 main-content-col2'>
                <img className='mx-auto' src={heroImage} alt="" />    
                <h5>Naina Jagiasi</h5>       
            </div>
            <div className='col-12 col-md-4 mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h5 className='text-white'>5+ Years</h5> 
                        <p>Experience</p>
                        <h5 className='text-white'>5+</h5> 
                        <p>Completed Projects</p>
                        
                    </div>
                    <div className='col-12 col-md-6'>
                        <h5 className='text-white'>10+</h5> 
                        <p>Certificates & Awards</p>
                        <h5 className='text-white'>2</h5> 
                        <p>Paper Publications</p>
                    </div>
                    <Link to='/paper-publications' className='myProjectImage'>
                        <img  src={projectImage} alt="projectImage"  />
                    </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
    <hr/>
    <SkillsComponent {...props.main_component}/>
    <hr/>
<<<<<<< Updated upstream
        <div className='container'>
            <div className='row bottomdata mb-5 pb-5'>
                <div className='col-12 col-md-7'>
                    <div className='bottomcontent'>
                    <h2 className=''>Any Projects/Publications To<span>Discuss?</span></h2>
=======
        <div className='container-fluid'>
            <div className='row bottomdata'>
                <div className='col-12 col-md-6 bottomcontent'>
                    <div className='p-5 my-3 d-flex justify-content-centerd-flex flex-column min-vh-100 justify-content-center align-items-center'>
                    <h2 className='d-flex justify-content-centerd-flex flex-column min-vh-100 justify-content-center align-items-center'>Any Projects/Publications To<span>Discuss?</span></h2>
                    <button className='btn mt-3' onClick={<PaperPublication/>}>Shoot Hi! </button>
>>>>>>> Stashed changes
                    </div>
                </div>
                <div className='col-12 col-md-5'>
                    <div className='bottomimage'>
                    <button className='btn my-3'>Shoot Hi!<span>24/7 Avaialble</span> </button>
                    </div>
                </div>
            </div>
        </div>
    {/* <hr/> */}
    {/* <div className='container'>
        <div className='row text-center'>
            <h2 className='mx-auto'>
                Get In Touch
            </h2>
            <h3>
                Voila! If you liked my Portfolio Please Share Your Comments by clicking Contact Me.
            </h3>
        </div>
    </div>
    <hr/> */}
    </>
  )
}
