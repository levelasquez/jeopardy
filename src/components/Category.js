import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Category extends Component {
  state = {
    clues: [],
  }

  componentDidMount() {
    const { category } = this.props

    fetch(`http://jservice.io/api/clues?category=${category.id}`)
      .then(response => response.json())
      .then(clues => this.setState({ clues }))
  }

  render() {
    const { clues } = this.state
    const { category } = this.props

    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h2>{category.title}</h2>
        {clues.map(clue => (
          <div key={clue.id}>
            {clue.question}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => ({ category })

const connectedCategory = connect(mapStateToProps)(Category)

export default connectedCategory
