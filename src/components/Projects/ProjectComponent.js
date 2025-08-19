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
        {pjData.map(({ pjTitle, pjSubHeading, pjText }, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="ppheading">{pjTitle}</h3>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: pjText }}
              ></p>
              <h4 className="ppSubheading"><strong>{pjSubHeading}</strong></h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
