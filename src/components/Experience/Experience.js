import React from "react";
import "./experience.scss";

const Experience = () => {
  const experienceList = [
    {
      company: "Nexion Automotive Solutions",
      title: "Software Developer",
      year: "Jan 2023 – May 2023",
      description: [
        "Developed a  light/dark theme toggle  for the admin dashboard using React.js context API, improving UI personalization and accessibility compliance.",
        "Integrated  multi-language support  via Google Translate API, generating dynamic JSON resource files for internationalization (i18n).",
        "Implemented  responsive navigation layout toggling  (horizontal/vertical) leveraging React hooks and state management, enhancing UX by 20%.",
        "Built a  full-stack CRUD application  with React.js frontend and Express.js backend, integrating REST APIs and MongoDB for efficient data persistence and retrieval.",
      ],
    },
    {
      company: "eClerx Services Limited",
      title: "React Developer",
      year: "Jul 2022 – Nov 2022",
      description: [
        "Developed  React.js landing pages  for global financial client campaigns, ensuring cross-browser compatibility and pixel-perfect implementation.",
        "Integrated  RESTful APIs  for dynamic data rendering, optimized performance using React hooks and functional components.",
        "Managed multiple repositories using  Git and Bitbucket , and delivered projects on time following  KANBAN methodology .",
      ],
    },
    {
      company: "Pixacore LLP",
      title: "UI Developer",
      year: "May 2021 – Jul 2022",
      description: [
        "Transformed Figma and Adobe XD designs into  responsive, mobile-first React.js and Angular UIs , improving user engagement by 30%.",
        "Deployed web applications to  AWS S3  across DEV, UAT, and PROD environments, managing CI/CD pipelines efficiently.",
        "Utilized  NetSuite and Bitbucket  for project tracking and version control, ensuring smooth delivery of healthcare and pharmaceutical projects.",
      ],
    },
    {
      company: "HERE Technologies",
      title: "Application Developer",
      year: "Dec 2017 – Apr 2021",
      description: [
        "Developed  real-time registration applications  using React.js integrated with SharePoint backend via Google AppScript.",
        "Built  internal content and event management portals  using PowerApps and Azure, improving workflow efficiency for 500+ users.",
        "Enhanced application features including  QR code generation, live schedule updates, and dynamic content rendering , streamlining internal processes.",
      ],
    },
  ];

  return (
    <div className="container expSection" id="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experienceList.map((exp, index) => (
          <div className="timeline_item" key={index}>
            <div className="timeline_dot"></div>
            <div className="timeline_card">
              <h2 className="card_title">{exp.company}</h2>
              <div className="card_para">
                <p className="card_text">
                  <strong>{exp.title}</strong>
                </p>
                <p className="card_text">{exp.year}</p>
              </div>
              {exp.description.map((desc, i) => (
                <p className="card_text" key={i}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
