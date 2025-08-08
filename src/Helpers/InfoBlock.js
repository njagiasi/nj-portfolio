import React from "react";
const InfoBlock = ({ title, subtitle }) => (
    <div className='mb-3 main-content-col3'>
      <h5 className="title">{title}</h5>
      <p className="subtitle">{subtitle}</p>
    </div>
  );

export default InfoBlock;