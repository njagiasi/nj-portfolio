import React from "react";
import "../assets/style.scss";
export const PROJECTS = (props) => {
  const {pjData}  = props.projects;
  return (
    <div className="page-wrapper">
      <div id="Projects">
        <section className="Projects">
          <div className="container">
            <h2 className="text-center my-5">Checkout My Projects</h2>
            {pjData.map(({ pjTitle, pjText, pjImage }) => (
            <div className="row d-inline-flex my-5">
              <div className="col-md-7 col-xs-12">
                <h4 className="ppheading text-left" dangerouslySetInnerHTML={{__html: pjTitle }}></h4>
                <p className="text-left" dangerouslySetInnerHTML={{__html: pjText }}></p>
              </div>
              <div className="col-md-5 col-xs-12">
                <img className="pjmainimg" src={pjImage} alt="" />
              </div>
            </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
