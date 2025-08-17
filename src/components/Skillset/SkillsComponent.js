import React from "react";
import "./skills.scss";
import { skills } from "./skillData";

export default function SkillsComponent() {
  return (
    <section className="container skillContainer sectionOdd" id="skills">
      <div className="main-heading">
        <h2>My Skills</h2>
      </div>
      <div className="skillSet">
{skills.map((skill, index) => (
          <div className="skillItem" key={index}>
            <img src={skill.icon} alt={`${skill.name} Icon`} />
            <h6>{skill.name}</h6>
          </div>
        ))}
        </div>
    </section>
  );
}

// export default function SkillsComponent() {
//   return (
//     <section className="container skillContainer sectionOdd" id="skills">
//       <div className="main-heading">
//         <h2>My Skills</h2>
//       </div>
//       <div className="skillSetVertical">
//         {skills.map((skill, index) => (
//           <div className="skillItemVertical" key={index}>
//             <img src={skill.icon} alt={`${skill.name} Icon`} />
//             <h5>{skill.name}</h5>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

