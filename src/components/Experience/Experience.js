import React from 'react';
import './experience.scss';

const Experience = () => {
  const experienceList = [
    {
      title: "Frontend Developer",
      description:
        "Worked on responsive UI with React and implemented reusable components.",
    },
    {
      title: "UI Engineer",
      description:
        "Built cross-browser compatible layouts with pixel-perfect precision.",
    },
    {
      title: "Web Designer",
      description:
        "Created wireframes and prototypes, improving user engagement by 30%.",
    },
    {
      title: "Intern",
      description:
        "Assisted in building dynamic web apps using HTML, CSS, JavaScript.",
    },
  ];

  return (
    <div className="container expSection" id='experience'>
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experienceList.map((exp, index) => (
          <div className="timeline_item" key={index}>
            <div className="timeline_dot"></div>
            <div className="timeline_card">
              <h2 className="card_title">{exp.title}</h2>
              <p className="card_text">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
