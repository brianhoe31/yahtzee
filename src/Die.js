import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ["one", "two", "three","four", "five", "six"]
  };
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.handleClick(this.props.idx);
  }

  render() {
    console.log(this.props.numWords[this.props.val]);

    let classes = `Die`
    return (
      <i
        className={this.props.rolling && !this.props.locked ? "Die Die-rolling" : `${classes}`}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >{this.props.val}
      
      </i>
    );
  }
}

export default Die;
