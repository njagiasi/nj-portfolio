import React from "react";

const GetInTouchSection = () => (
  <section
    className="container text-center contactBlock sectionOdd"
    id="contactMe"
  >
    <div className="contact">
      <h2>Get In Touch</h2>
      <h5>
        I’d love to hear your feedback or discuss opportunities.
      </h5>
      <h6>
        Feel free to reach out!
      </h6>
      <p className="callEmail">
        <a href="tel:+15196164323" className="navLink nav-link">
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
