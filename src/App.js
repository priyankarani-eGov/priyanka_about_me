import React from 'react';
import './App.css';
/*import IndiaCases from './Component/IndiaCases/IndiaCases';
import StateSearch from './Component/StateSearch/StateSearch';*/
import MyNameId from './Component/MyNameId/MyNameId';
import AboutProjects from './Component/AboutProjects/AboutProjects';
import MyIntro from './Component/MyIntro/MyIntro';
import ExperienceEducation from './Component/ExperienceEducation/ExperienceEducation';
import SkillToolsHobbies from './Component/SkillToolsHobbies/SkillToolsHobbies';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    myInfo: {
      name: "Priyanka Rani",
      designation: "Software Engineer",
      gmail: "priyankarani@gmail.com",
      facebook: "facebook.com/priyankarani@gmail.com",
    },

    projectInfo: [
      { "name": "Projects", "description": "6+" },
      { "name": "Mentees", "description": "1" },
      { "name": "Publications", "description": "0" },
      { "name": "Certificates", "description": "1" },
    ],

    myIntro: "I am a Java Developer with 4+ years of professional experience.Having sound knowledge of Object Oriented fundamentals (OOPS), Core Java, Collection framework, JDBC.Good exposure to the Software Development Life Cycle (SDLC) Development and maintenance.Comprehensive knowledge on Maven and SVN.Currenly working with eGovernments Foundation, previously I have worked with ict Health pvt. Ltd.I have experience in backend technology with some knowledge of javascript, css. In database I have work experience in Oracle,postgres. I was part of 6+ projects specially for java technologies.Willing to learn and adapt to Challenges on New Technologies. I hold MCA from SASTRA University and have 1 certification in Java,J2EE.",

    skilltools: [
      {
        name: "Operating Systems Windows Environment, Basic Linux(Ubuntu)",
        category: "Skills"
      },
      {
        name: "Java Programming Languages",
        category: "Skills"
      },
      {
        name: "HTML Web Technologies",
        category: "Skills"
      },
      {
        name: "Maven",
        category: "Tools"
      },
      {
        name: "SVN",
        category: "Tools"
      }

    ],

    experience: [
      {
        company: "eGovernment Foundation",
        designation: "SE",
        duration: "08/2015-present",
      },
      {
        company: "ict Health Pvt. ltd.",
        designation: "SE",
        duration: "09/2011-03/2013",
      }
    ],
    education: [
      {
        univ: "SASTRA UNIVERSITY",
        degree: "MCA",
        year: "2007-2010"
      },
      {
        univ: "JP UNIVERSITY.",
        degree: "BCA",
        year: "2002-2006"
      }],

    language: "English,Hindi,Tamil(Basic)"
  }

  render() {
    const { myInfo = {}, projectInfo = [], myIntro = "", skilltools = [], experience= [], education= [], language="" } = this.state;
    return (
      <div className="my-profile">
        <MyNameId myInfo={myInfo} />
        <AboutProjects projectInfo={projectInfo} />
        <MyIntro myIntro={myIntro} />
        <ExperienceEducation experience= {experience} education= {education} language= {language} />
        <SkillToolsHobbies skilltools={skilltools} />
      </div>
    );
  }
}

export default App;
