import React from "react";
import InfoBlock from "./InfoBlock";
import heroImage from "../assets/images/Naina.jpeg";
import resume from "../assets/docs/Resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaFileDownload,
} from "react-icons/fa";

const TopSection = () => {
  const infoData = [
    { title: "5+", subtitle: " Years Experience" },
    { title: "5+", subtitle: "Completed Projects" },
    { title: "10+", subtitle: "Certificates & Awards" },
    { title: "2", subtitle: "Paper Publications" },
  ];

  return (
    <div className="container top-container" id="about-me">
      <section className="main-content">
        <div className="main-content-row-flex">
          {/* Left: Text */}
          <div className="main-content-left">
            <h1>
              I Can{" "}
              <span>
                <br />
                Visualize
                <br />
              </span>{" "}
              Your Idea
            </h1>
            <h5>
              <strong> Full Stack Developer </strong>
            </h5>
            <p className="main-para">
              Expertise in Frontend (React, JavaScript, Bootstrap), Backend
              (.NET Core, APIs), and Databases (SQL, MongoDB)
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
              {/* Contact */}
              <a href="/#contactMe" className="icon-link phone-icon" title="Contact Me">
                <FaPhone size={28} />
              </a>

              {/* Resume */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="icon-link"
                title="Download Resume"
              >
                <FaFileDownload size={28} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/njagiasi"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="GitHub"
              >
                <FaGithub size={28} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/naina-jagiasi"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSection;
