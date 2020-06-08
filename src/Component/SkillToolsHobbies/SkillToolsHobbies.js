import React from 'react'
import "./skilltoolshobbies.css"
import fbpic from './Facebook_Login_Button.png';
import music from './music.png';

class SkillToolsHobbies  extends React.Component{
    render(){
      return(
      <div className="my-skill-tools-hobbies">
          <div className="my-skill">
             
            <ul className="ul-list-type">
            <li><h1>Skills</h1></li>
            <li>Operating Systems Windows Environment, Basic Linux(Ubuntu)</li>
            <li>Java Programming Languages </li>
            <li>HTML Web Technologies</li>
            <li>Spring,Hibernate Frame Works</li>
            <li>Oracle, postgres Data Bases </li>
            <li>Tomcat, JBOSS Web/App Servers</li>
            <li>Eclipse IDE’s</li>
            <li>Elastic Search Search Engine</li>
            </ul>
         </div>
         <div className="my-tools">
            <ul className="ul-list-type">
            <li><h1>Tools</h1></li>
            <li>Maven</li>
            <li>SVN</li>
            </ul>
         </div>
         <div className="my-hobbies">
            
           <h1>Hobbies</h1>
           <table><tr><td><img src={music }/></td>
           <td><img src={fbpic }/></td></tr></table>
           
         </div>
         
      </div>)
    }
}

export default SkillToolsHobbies;