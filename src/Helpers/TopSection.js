import React from 'react';
import InfoBlock from './InfoBlock';
import heroImage from '../assets/images/Naina.jpeg'
import resume from '../assets/docs/Resume.pdf'
const TopSection = () => {
  const infoData = [
    { title: '5+', subtitle: ' Years Experience' },
    { title: '5+', subtitle: 'Completed Projects' },
    { title: '10+', subtitle: 'Certificates & Awards' },
    { title: '2', subtitle: 'Paper Publications' },
  ];

  return (
      <div className="container top-container" id='about-me'>
  <section className="main-content">
    <div className="main-content-row-flex">
      {/* Left: Text */}
      <div className="main-content-left">
        <h1>
          I Can <span><br />Visualize<br /></span> Your Idea
        </h1>
        <h5>
         <strong> Full Stack Developer </strong>
        </h5>
          <p className="main-para">
          {/* Skilled in React, .NET Core, JavaScript, SQL, and Cloud Deployment
          <br /> */}
          Expertise in Frontend (React, JavaScript, Bootstrap), Backend (.NET Core, APIs), and Databases (SQL, MongoDB)
        </p>
        
      </div>

      {/* Middle: Image */}
      <div className="main-content-center">
        <img className="mx-auto" src={heroImage} alt="ProfileImage" />
        <h5>Naina Jagiasi</h5>
      </div>

      {/* Right: Info Blocks */}
      <div className="main-content-right">
        <div className="info-grid">
          {infoData.map(({ title, subtitle }) => (
            <InfoBlock title={title} subtitle={subtitle} key={title} />
          ))}
        </div>
        <div className="contactResume">
          <a className="btn btn-outline text-center" href="/#contactMe">
          Contact Me
        </a>
        <a className="btn btn-outline text-center" href={resume} target="_blank" rel="noopener noreferrer" download>
            Resume
        </a>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default TopSection;
