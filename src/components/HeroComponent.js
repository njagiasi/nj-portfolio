import React from 'react'

    export default function HeroComponent(props) {
      const {mainheroImage, heading1, heading2}  = props.hero_heading;
      return (
          <div className='container py-5 text-center top-container bg-image'>
            <div className='mask'>
              <div className='topheading'>
                <div>
                  <h1> {heading1}</h1>
                  <h2>{heading2}</h2>
                  <img src={mainheroImage} alt="" />
                </div>
              </div>
            </div>
            <hr/>
          </div>
      );
    }
    