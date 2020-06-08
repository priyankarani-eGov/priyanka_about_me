import React from 'react';
import './App.css';
/*import IndiaCases from './Component/IndiaCases/IndiaCases';
import StateSearch from './Component/StateSearch/StateSearch';*/
import MyNameId from './Component/MyNameId/MyNameId';
import AboutProjects from './Component/AboutProjects/AboutProjects';
import MyIntro from './Component/MyIntro/MyIntro';
import ExperienceEducation from './Component/ExperienceEducation/ExperienceEducation';
import SkillToolsHobbies from './Component/SkillToolsHobbies/SkillToolsHobbies';

function App() {
  return (
    <div className="my-profile">
       <MyNameId/>
       <AboutProjects/>
       <MyIntro/>
       <ExperienceEducation/>
       <SkillToolsHobbies/>
    </div>
  );
}

export default App;
