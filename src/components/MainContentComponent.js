import React from 'react'
import SkillsComponent from './SkillsComponent'

export default function MainContentComponent(props) {
    const {heroImage, smallHeading, paragraph}  = props.main_component;
  return (
    <>
    <div className='main-content text-center'>
        <div className='container'>
            <img className='mx-auto' src={heroImage} alt="" />           
            <h5  className='mt-4'>{smallHeading}</h5>
            <p  className='main-para'>{paragraph}</p>
        </div>
        <hr/>
    </div>  
    <div>
    <SkillsComponent {...props.main_component}/>
    </div>
    <hr/>
        <div className='container bottom-content text-white'>
            <div className='row'>
                <div className=''>
                    <div>
                    <h5>Hover Me To Watch Exciting Projects!</h5>
                    </div>
                </div>
            </div>
        </div>
    <hr/>
    <div className='container'>
        <div className='row py-5 text-center'>
            <h2 className='mx-auto'>
                Get In Touch
            </h2>
            <h3>
                Voila! If you liked my Portfolio Please Share Your Comments by clicking Contact Me.
            </h3>
            <button type="btn" className='btn text-center mx-auto my-2'> Contact Me</button>
        </div>
    </div>
    <br/>
    </>
  )
}
