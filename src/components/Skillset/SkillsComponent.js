import React from "react";
import "./skills.scss";
import reactImg from '../../assets/icons/react.png'
export default function SkillsComponent({ cardData = [] }) {
  return (
    <section className="container skillContainer sectionOdd" id="skills">
      <div className="main-heading">
        <h2>My Skills</h2>
      </div>
      <div className="skillSet">
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
        <div className="skillItem">
          <img src={reactImg} alt="ReactIcon"/>
          <h5>ReactJs</h5>
        </div>
      </div>
    </section>
  );
}
