import React from "react";

const GetInTouchSection = () => (
  <section
    className="container text-center contactBlock sectionOdd"
    id="contactMe"
  >
    <div className="contact">
      <h2>Get In Touch</h2>
      <h3>
        Thanks for checking out my portfolio! I’d love to hear your feedback.
      </h3>
      <p>
        I’m passionate about building efficient, user-friendly applications and
        collaborating on projects that drive real impact. Feel free to reach out
        to discuss opportunities or just say hello!
      </p>
      <p className="d-inline">
        <a href="tel:+1234567890" className="navLink nav-link">
          Call Me
        </a>{" "}
        or
        <a href="mailto:your.email@example.com" className="navLink nav-link">
          Email Me
        </a>
      </p>
    </div>
  </section>
);

export default GetInTouchSection;
