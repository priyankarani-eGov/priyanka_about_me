import React from 'react';
import "./myintro.css";
import Paper from '@material-ui/core/Paper';

class MyIntro extends React.Component {
  render() {
    const { myIntro } = this.props;
    return (
      
        <Paper elevation={3} >
        {myIntro}
        </Paper>
     )
  }

      
}

export default MyIntro;