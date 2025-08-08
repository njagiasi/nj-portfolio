import React from 'react';
import InfoBlock from './InfoBlock';
import heroImage from '../assets/images/Naina.jpeg'
const TopSection = () => {
  const infoData = [
    { title: '5+', subtitle: ' Years Experience' },
    { title: '5+', subtitle: 'Completed Projects' },
    { title: '10+', subtitle: 'Certificates & Awards' },
    { title: '2', subtitle: 'Paper Publications' },
  ];

  return (
      <div className="container top-container" id='about-me'>
  <section className="pt-5 mt-5 main-content">
    <div className="main-content-row-flex">
      {/* Left: Text */}
      <div className="main-content-left">
        <h1>
          I Can <span><br />Visualize<br /></span> Your Idea
        </h1>
        <p className="main-para">
          Something About the design and development that you don't know but I know as I am a Software Developer
        </p>
        <a className="btn btn-outline text-center mx-auto my-2" href="/#contactMe">
          Contact Me
        </a>
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
      </div>
    </div>
  </section>
</div>

  );
};

export default TopSection;
