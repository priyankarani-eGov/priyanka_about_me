import React from 'react'
import "./aboutproject.css"

class AboutProjects  extends React.Component{
    render(){
      return(
      <div className="my-project-details">
          <div className="my-projects">
            <ul className="ul-list-type">
               <li><h2>6+</h2></li>
               <li>Projects</li>
            </ul>
         </div>
         <div className="my-projects">
            <ul className="ul-list-type">
               <li><h2>1+</h2></li>
               <li>Mentees</li>
            </ul>
         </div>
         <div className="my-projects">
            <ul className="ul-list-type">
               <li><h2>0</h2></li>
               <li>Publications</li>
            </ul>
         </div>
         <div className="my-projects">
            <ul className="ul-list-type">
               <li><h2>1</h2></li>
               <li>Certificate</li>
            </ul>
         </div>
      </div>)
    }
}

export default AboutProjects;