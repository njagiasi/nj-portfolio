import SkillsComponent from '../Skillset/SkillsComponent';
import GetInTouchSection from '../../Helpers/GetInTouchSection';
import TopSection from '../../Helpers/TopSection';
import Education from '../Education/Education';
import './mainContent.scss'
import Experience from '../Experience/Experience';
import PPComponent from '../Publication/PPComponent';
import { ProjectComponent } from '../Projects/ProjectComponent';
export default function MainContentComponent({ main_component, projects }) {
  return (
    <>
      <TopSection {...main_component} />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <SkillsComponent {...main_component} />
      <hr />
      <ProjectComponent {...projects}/>
      <hr />
      <PPComponent />
      <hr />
      <GetInTouchSection />
      <hr />
    </>
  );
}
