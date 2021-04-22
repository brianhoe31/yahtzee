import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick() {
    this.props.doScore();

    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <tr className={this.state.clicked ? "RuleRow RuleRow-disabled" : "RuleRow RuleRow-active"}  onClick={this.handleClick}>
        <td className="RuleRow-name" disabled={this.state.clicked}>{this.props.name}</td>
        <td className="RuleRow-score" disabled={this.state.clicked}>{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;