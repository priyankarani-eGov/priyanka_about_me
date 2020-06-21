import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Projects extends React.Component {
    render() {
        const { projectInfo } = this.props;
        return (
            projectInfo.map((key, index) => {

                return (
                    <div key={index}>
                        <Card >
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {key.description}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    {key.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div >
                )
            })

        )
    }
}

export default Projects;