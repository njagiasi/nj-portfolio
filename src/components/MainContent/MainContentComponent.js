import SkillsComponent from '../Skillset/SkillsComponent';
import GetInTouchSection from '../../Helpers/GetInTouchSection';
import TopSection from '../../Helpers/TopSection';
import Education from '../Education/Education';
import './mainContent.scss'
import Experience from '../Experience/Experience';
// import PPComponent from '../Publication/PPComponent';
import { ProjectComponent } from '../Projects/ProjectComponent';
export default function MainContentComponent({ projects }) {
  return (
    <>
      <TopSection />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <SkillsComponent />
      <hr />
      <ProjectComponent {...projects}/>
      <hr />
      {/* <PPComponent /> */}
      {/* <hr /> */}
      <GetInTouchSection />
      {/* <hr /> */}
    </>
  );
}
