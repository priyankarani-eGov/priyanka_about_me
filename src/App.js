import React from 'react';
import './App.css';
import MyNameId from './Component/MyNameId/MyNameId';
import AboutProjects from './Component/AboutProjects/AboutProjects';
import MyIntro from './Component/MyIntro/MyIntro';
import ExperienceEducation from './Component/ExperienceEducation/ExperienceEducation';
import SkillToolsHobbies from './Component/SkillToolsHobbies/SkillToolsHobbies';
import AddFeedback from './Component/AddFeedback/AddFeedback';
import FeedBackValSet from './Component/FeedBackValSet/FeedBackValSet';
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

    language: "English,Hindi,Tamil(Basic)",

    ratings: [
      { rate: "1" },
      { rate: "2" },
      { rate: "3" },
      { rate: "4" },
      { rate: "5" }
    ],

    feedbackvalues: [{
      name: "",
      rating: "",
      description: ""
    }],

    feedbackval: {
      name: "",
      rating: "",
      description: ""
    }

  }

  addfeedback = (feedbackval = {}) => {
    if(feedbackval.name && feedbackval.description && feedbackval.rating)
    {let { feedbackvalues = {} } = this.state;
    feedbackvalues.push(feedbackval);
    this.setState({
      feedbackvalues
    })
  }else{
    alert("Please enter values")
  }
  }
  handleChangeName = (value ) => {
    const { feedbackval } = this.state;
    this.setState({
      feedbackval: {
        ...feedbackval,
        name: value
      }
    })
  }

  handleChangeDesc = (value) => {
    const { feedbackval } = this.state;
    this.setState({
      feedbackval: {
        ...feedbackval,
        description: value
      }
    })
  }

  handleChangeRate = (value) => {
    const { feedbackval } = this.state;
    this.setState({
      feedbackval: {
        ...feedbackval,
        rating: value
      }
    })
  }



  render() {
    const { myInfo = {}, projectInfo = [], myIntro = "", skilltools = [], experience = [], education = [], language = "", feedbackval = {}, ratings = [], feedbackvalues = [] } = this.state;
    const { handleChangeName, handleChangeDesc, handleChangeRate, addfeedback } = this;

    return (
      <div className="my-profile">
        <MyNameId myInfo={myInfo} />
        <AboutProjects projectInfo={projectInfo} />
        <MyIntro myIntro={myIntro} />
        <ExperienceEducation experience={experience} education={education} language={language} />
        <SkillToolsHobbies skilltools={skilltools} />
        <FeedBackValSet feedbackvalues={feedbackvalues} />
        <AddFeedback feedbackval={feedbackval} ratings={ratings} handleChangeName={handleChangeName} handleChangeDesc={handleChangeDesc} handleChangeRate={handleChangeRate} addfeedback={addfeedback} />

      </div>
    );
  }
}

export default App;
