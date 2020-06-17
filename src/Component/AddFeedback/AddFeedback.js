import React from "react";
import Button from '@material-ui/core/Button';
import { Paper, withStyles } from '@material-ui/core';

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

class AddFeedback extends React.Component {
    render() {
        const { feedbackval = {}, ratings = [], handleChangeName, handleChangeDesc, handleChangeRate, addfeedback, classes } = this.props;
        return (<div>
            <form>
                <Paper className={classes.root}>
                <h3>Add Feedback</h3>
                    <label>Name</label>:<input type="text" value={feedbackval.name} onChange={(e) => { handleChangeName(e.target.value) }} /><br/>
                    <label>Description</label><textarea onChange={(e) => { handleChangeDesc(e.target.value) }} value={feedbackval.description} /><br/>
                    <label>Rating</label><select onChange={(e) => { handleChangeRate(e.target.value) }}>{
                        ratings.map((rt, rtindex) => <option rt={rtindex} value={rt.rate}>{rt.rate}</option>)
                    } </select><br/>
                    <Button variant="contained" color="primary" onClick={(e) => {
                    e.preventDefault()
                    addfeedback(feedbackval)
                }
                }>Submit
                </Button>
                </Paper>

                
            </form>
        </div >)
    }
}

export default withStyles(styles)(AddFeedback);  