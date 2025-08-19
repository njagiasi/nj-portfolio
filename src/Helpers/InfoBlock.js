import React from "react";
const InfoBlock = ({ title, subtitle }) => (
    <div className='main-content-col3'>
      <h5 className="title">{title}</h5>
      <p className="main-para">{subtitle}</p>
    </div>
  );

export default InfoBlock;