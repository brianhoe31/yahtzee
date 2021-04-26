import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  static defaultProps = {
    rule: {
      ones: "Score 1 for every 1",
      twos: "Score 2 for every 2",
      threes: "Score 3 for every 3",
      fours: "Score 4 for every 4",
      fives: "Score 5 for every 5",
      sixes: "Score 6 for every 6",
      threeofkind: "Score Sume of all Dice",
      fourofkind: "Score Sum of all Dice",
      fullhouse: "25 points for Full House",
      smallstraight: "30 points for Small Straight",
      largestraight: "40 points for Large Straight",
      yahtzee: "50 points for Yahtzee",
      chance: "Score sum of all dice"
    }
  }

  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick() {
    if(!this.state.clicked){
      this.props.doScore();

      this.setState({
        clicked: true
      })
    }
  }

  render() {
    let ruleName = this.props.name.toLowerCase().replace(/\s/g, '');

    return (
      <tr className={`RuleRow RuleRow-${this.state.clicked ? 'disabled' : 'active'}`}  onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.state.clicked ? this.props.score : this.props.rule[ruleName]}</td>
      </tr>
    )
  }
}

export default RuleRow;