import React from 'react'
export default function SkillsComponent(props) {
  const cardItems = props.cardData;
  // Pass a function to map
  cardItems.map(({ cardImage }) => (
    console.log(cardImage)
  ))

  return (
    <div class="container card-container">
      <div class="row">
        {cardItems.map(({ cardTitle, cardText, cardImage, cardButton }) => (
          <div class="col-md-3 card-data">
            <div class="card-deck">
              <div class="card">
                <img class="card-img" src={cardImage} />
                <div class="card-img-overlay">
                  <h5 class="card-title text-white text-center my-auto">{cardTitle}</h5>
                  <p class="card-text">{cardText}</p>
                  {/* <a class="btn btn-outline-light" href="#">{cardButton}</a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
