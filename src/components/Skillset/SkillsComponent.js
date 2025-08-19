// SkillsComponent.js
import React from "react";
import "./skills.scss";
import { skills } from "./skillData";
import { useTheme } from "../../context/themeProvider"; // 👈 import useTheme

export default function SkillsComponent() {
  const { theme } = useTheme(); // 👈 use theme directly
  console.log("Current theme is:", theme);

  return (
    <section className="container skillContainer sectionOdd" id="skills">
      <div className="main-heading">
        <h2>My Skills</h2>
      </div>
      <div className="skillSet">
        {skills.map((skill, index) => (
          <div className="skillItem" key={index}>
            <img
              src={theme === "light" ? skill.icon.dark : skill.icon.light}
              alt={`${skill.name} Icon`}
            />
            <h6>{skill.name}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}
