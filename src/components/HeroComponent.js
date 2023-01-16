import React from 'react'

    export default function HeroComponent(props) {
      const {mainheroImage, heading1, heading2}  = props.hero_heading;
      return (
          <div className='py-5 text-center top-container bg-image'>
            <div className='mask'>
              <div className='d-flex justify-content-center align-items-center'>
                <div>
                  <h1 className='mb-3 mt-5 top-heading'> {heading1}</h1>
                  <h2 className='mb-3 top-heading'>{heading2}</h2>
                  <img src={mainheroImage} alt="" />
                </div>
              </div>
            </div>
            <br/>
            <hr/>
          </div>
      );
    }