import React from "react";
import { Paper, withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'left',
        direction: 'column',

    },
    box: {
        padding: theme.spacing(2),
        textAlign: 'center',
        boxShadow: 3,
        margin: theme.spacing(2),
    }
});

class FeedBackValSet extends React.Component {

    render() {
        const { feedbackvalues = [], classes } = this.props;
        return <div>
            <Paper className={classes.root} elevation={3} >

                <h3>Feedback</h3>{
            feedbackvalues.map((key, index) => {
             return (   
        <div key={index}>
        <List>
            Name:{key.name}<br/>
            Description:{key.description}<br/>
            Rating:{key.rating}<br/>
        </List>
    </div>
             )     
            })
            }</Paper>
        </div>
     }
}

export default withStyles (styles) (FeedBackValSet); 