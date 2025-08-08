import React from "react";
import './project.scss'
export const ProjectComponent = (props) => {
  const {pjData}  = props;
  return (
  <section className="Projects" id="projects">
    <div className="container">
      <div className="main-heading">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {pjData.map(({ pjTitle, pjSubHeading, pjText, pjImage }, index) => (
          <div className="project-card" key={index}>
            <img
              className="project-image"
              src={require(`../../assets/images/${pjImage}`)}
              alt={pjTitle}
            />
            <div className="project-content">
              <h3 className="ppheading">{pjTitle}</h3>
              <h4 className="ppSubheading">{pjSubHeading}</h4>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: pjText }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
