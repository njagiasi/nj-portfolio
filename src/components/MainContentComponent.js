import React from 'react'
import SkillsComponent from './SkillsComponent'

export default function MainContentComponent(props) {
    const {heroImage, smallHeading, paragraph, bottomimage}  = props.main_component;
  return (
    <>
    <div className='container main-content text-center'>
        <div className='container'>
            <img className='mx-auto' src={heroImage} alt="" />           
            <h5  className='mt-4'>{smallHeading}</h5>
            <p  className='main-para'>{paragraph}</p>
        </div>
    </div>
    <hr/>
    <SkillsComponent {...props.main_component}/>
    <hr/>
        <div className='container-fluid'>
            <div className='row bottomdata'>
                <div className='col-12 col-md-6 bottomcontent'>
                    <div className='p-5 my-3 d-flex justify-content-centerd-flex flex-column min-vh-100 justify-content-center align-items-center'>
                    <h2 className='d-flex justify-content-centerd-flex flex-column min-vh-100 justify-content-center align-items-center'>Any Projects/Publications To<span>Discuss?</span></h2>
                    <button className='btn mt-3'>Shoot Hi! </button>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='bottomimage'>
                    <img src ={bottomimage} />
                    </div>
                </div>
            </div>
        </div>
    <hr/>
    <div className='container'>
        <div className='row text-center'>
            <h2 className='mx-auto'>
                Get In Touch
            </h2>
            <h3>
                Voila! If you liked my Portfolio Please Share Your Comments by clicking Contact Me.
            </h3>
            <button type="btn" className='btn text-center mx-auto my-2'> Contact Me</button>
        </div>
    </div>
    <hr/>
    </>
  )
}
