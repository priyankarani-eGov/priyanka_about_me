import React from 'react'
import "./aboutproject.css"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Projects from "../../Component/pages/projects/Projects";

class AboutProjects extends React.Component {

  render() {
    const { projectInfo = [] } = this.props;
    const filteredproject= projectInfo.filter((projInfo) => { return projInfo.name === 'Projects' });
    return (
      <div className="my-project-details">
        <div className="my-projects">
         <Link to='/Project'><Projects projectInfo={filteredproject}/></Link>
           
        </div>
        <div className="my-projects">
          <Card >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                1+
        </Typography>
              <Typography color="textSecondary" gutterBottom>
                Mentees
        </Typography>
            </CardContent>
          </Card>
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