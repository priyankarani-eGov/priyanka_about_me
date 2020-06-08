import React from "react"
import "./experienceeducation.css"

class ExperienceEducation extends React.Component{
   render(){
      return(
      
      <div className="my-exp-edu">
         
         <div className="my-exp">
          <h1>Experiences</h1>
          <div className="egov-foundation">
          <h2>eGovernments Foundation</h2> 
          <p>Software Engineer</p>
          <p>08/2015 - Present</p>
          </div>
          <div className="ict-health">
          <h2>ict Health Pvt. Ltd.</h2> 
          <p>Software Engineer</p>
          <p>09/2011 - 03/2013</p>
          </div>
          </div>
         
         <div className="my-edu">
             <h1>Education</h1>
         <div className="sastra-univ">
          <h2>SASTRA UNIVERSITY, TN</h2> 
          <p>MCA</p>
          <p>2007-2010</p>
          </div>
          <div className="jp-univ">
          <h2>JP UNIVERSITY, BIHAR</h2> 
          <p>BCA</p>
          <p>2002-2006</p>
          </div>
          <div className="lang-known">
          <h2>Languages</h2> 
          <p>English, Hindi, Tamil(Basic)</p>
          </div>
         </div>

         
         
         </div>
         
         )
   }
}

export default ExperienceEducation;