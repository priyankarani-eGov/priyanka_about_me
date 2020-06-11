import React from 'react';
import SkillToolHobbiesSet from "./component/SkillToolHobbiesSet/SkillToolHobbiesSet.js";
import "./skilltoolshobbies.css";
import fbpic from './Facebook_Login_Button.png';
import music from './music.png';

class SkillToolsHobbies extends React.Component {
  render() {
    const { skilltools = [] } = this.props;
    const filteredSkills = skilltools.filter((skilltool) => { return skilltool.category === "Skills" })
    const filteredTools = skilltools.filter((skilltool) => { return skilltool.category === "Tools" })
    return (
      <div className="my-skill-tools-hobbies">
        <div className="my-skill">
          <SkillToolHobbiesSet skillsets={filteredSkills} headerName="Skills" />
        </div>
        <div className="my-tools">
          <SkillToolHobbiesSet skillsets={filteredTools} headerName="Tools" />
        </div>
        <div className="my-hobbies">
          <h1>Hobbies</h1>
          <table><tr><td><img src={music} /></td>
            <td><img src={fbpic} /></td></tr></table>

        </div>

      </div>)
  }
}

export default SkillToolsHobbies;