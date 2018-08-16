import React, { Component } from 'react'

class Clue extends Component {
  state = {
    reveal: false,
  }

  handleReveal = () => this.setState({ reveal: true })

  render() {
    const { reveal } = this.state
    const { clue: { answer, question, value } } = this.props

    return (      
      <div className='clue' onClick={this.handleReveal}>
        <h4>{value || 'unknown'}</h4>
        <hr />
        <h5>{question}</h5>
        <hr />
        <h5 className={reveal ? 'text-revealed' : 'text-hidden'}>{answer}</h5>
      </div>
    )
  }
}

export default Clue
