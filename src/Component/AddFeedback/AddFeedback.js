import React from "react";
import Button from '@material-ui/core/Button';

class AddFeedback extends React.Component {
    render() {
        const { feedbackval = {}, ratings = [], handleChangeName, handleChangeDesc, handleChangeRate, addfeedback } = this.props;
        return (<div>
            <form>
                <label>Name</label>:<input type="text" value={feedbackval.name} onChange={(e) => { handleChangeName(e.target.value) }} />
                <label>Description</label><textarea onChange={(e) => { handleChangeDesc(e.target.value) }} value={feedbackval.description} />
                <label>Rating</label><select onChange={(e) => { handleChangeRate(e.target.value) }}>{
                    ratings.map((rt, rtindex) => <option rt={rtindex} value={rt.rate}>{rt.rate}</option>)
                } </select>
              {/*}  <button onClick={(e) => {
                    e.preventDefault()
                    addfeedback(feedbackval)
                }
                }>Add Feedback</button>*/}

<Button variant="contained" color="primary" onClick={(e) => {
                    e.preventDefault()
                    addfeedback(feedbackval)
                }
                }>
Add Feedback
</Button>
            </form>
        </div >)
    }
}

export default AddFeedback;  