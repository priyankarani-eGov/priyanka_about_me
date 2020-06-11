import React from 'react'
import "./aboutproject.css"

class AboutProjects extends React.Component {
   render() {
      const { projectInfo } = this.props;
      return <div className="my-project-details">{
         projectInfo.map((key, index) => {
            return (
               <div className="my-projects" key={index}>
                  <ul className="ul-list-type">
                     <li><h2>{key.description} </h2></li>
                     <li> {key.name} </li>
                  </ul>
               </ div>)
         })

      }</div>
   }
}
export default AboutProjects;