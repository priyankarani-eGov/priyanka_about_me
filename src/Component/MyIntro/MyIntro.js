import React from 'react'
import "./myintro.css"

class MyIntro extends React.Component {
  render() {
    const { myIntro } = this.props;
    return (
      <div className="my-intro">
        <p>{myIntro}</p>
      </div>)
  }

}

export default MyIntro;