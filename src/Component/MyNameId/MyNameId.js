import React from "react"
import profilepic from './profilepic.jpg';
import "./mynameid.css"

class MyNameId extends React.Component{
   render(){
      return(
      
      <div className="my-name-id">
         
         <div className="my-pic-name-desig">
          <div ><img src={profilepic} className="my-pic"/></div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="my-name-desig">
          <h1>Priyanka Rani</h1> 
          <h2>Software Engineer</h2>
          </div>
         
          </div>
         
         <div className="my-ids">
            <ul>
               <li>priyankarani@gmail.com</li>
               <li>facebook.com/priyankarani@gmail.com</li>
            </ul>
         </div>
         
         </div>
         
         )
   }
}

export default MyNameId;