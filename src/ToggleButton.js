import React from 'react'
import "./ToggleButton.scss"

export default class ToggleButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: props.initialCondition
    }
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return(
      <div className="slider" onClick={ () => this.handleClick() }>
        <div className="round-container">
          <div className={ "round-" + (this.state.isToggleOn ? "on":"off") }>
          </div>
        </div>
      </div>
    )
  }
}