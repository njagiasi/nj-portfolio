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
        {
            cardItems.map(({ cardTitle, cardText, cardImage, cardButton }) => (
      <div class="col-md-3">
        <div class="card-deck">
          <div class="card text-white"><img class="card-img" src={cardImage} />
            <div class="card-img-overlay">
              <h2 class="card-title">{cardTitle}</h2>
              <p class="card-text">{cardText}</p>
              <a class="btn btn-outline-light" href="#">{cardButton}</a>
            </div>
          </div>
        </div>
      </div>
                ))
              }
    </div>
  </div>
  )
}
