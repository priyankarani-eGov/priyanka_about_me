import React from "react"

class SkillToolHobbiesSet extends React.Component{
    render(){
        const {skillsets,headerName}=this.props;
        return <div>
            <h3>{headerName}</h3>
            {
                skillsets.map((skillset,skillsetIndex)=>{
                    return ( <p key={skillsetIndex}>{skillset.name}</p>)
                }
                )
            }
        </div>
    }
}

export default SkillToolHobbiesSet;