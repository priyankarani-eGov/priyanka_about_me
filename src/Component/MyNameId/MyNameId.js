import React from "react"
import profilepic from './profilepic.jpg';
import "./mynameid.css"

class MyNameId extends React.Component {
   render() {
      const { myInfo } = this.props;
      return (

         <div className="my-name-id">

            <div className="my-pic-name-desig">
               <div ><img src={profilepic} className="my-pic" /></div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="my-name-desig">
                  <h1>{myInfo.name}</h1>
                  <h2>{myInfo.designation}</h2>
               </div>

            </div>

            <div className="my-ids">
               <ul>
                  <li>{myInfo.gmail}</li>
                  <li>{myInfo.facebook}</li>
               </ul>
            </div>

         </div>

      )
   }
}

export default MyNameId;