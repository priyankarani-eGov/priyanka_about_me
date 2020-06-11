import React from "react"
import "./experienceeducation.css"

class ExperienceEducation extends React.Component {
   render() {
      const { experience = [], education = [], language = "" } = this.props;
      return (
         <div className="my-exp-edu">
            <div className="my-exp">
               <h1>Experiences</h1>{
                  experience.map((expr, exprindex) => {
                     return (
                        <div expr={exprindex}>
                           <h3>{expr.company}</h3>
                           <p>{expr.designation}</p>
                           <p>{expr.duration}</p>
                        </div>
                     )
                  })
               }
            </div>
            <div className="my-edu">
               <h1>Education</h1>{
                  education.map((edu, eduindex) => {
                     return (
                        <div edu={eduindex}>
                           <h3>{edu.univ}</h3>
                           <p>{edu.degree}</p>
                           <p>{edu.year}</p>
                        </div>
                     )
                  })
               }
               <h1>Language</h1>{
                  <p>{language}</p>
               }
            </div>
         </div>


      )
   }
}

export default ExperienceEducation;