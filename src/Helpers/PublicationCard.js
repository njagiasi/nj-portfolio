import React from "react";

const PublicationCard = ({ imgSrc, title, description, link }) => {
  return (
      <div className="publication_card">
        <div className="column-left">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="column-right">
          <h3 className="card_title">{title}</h3>
          <p className="card_text">{description}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn customBtn">Learn More</button>
          </a>
        </div>
      </div>
  );
};

export default PublicationCard;
