import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Clue from './Clue'

export class Category extends Component {
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
        <h2>{category.title}</h2>
        {clues.map(clue => (
          <Clue key={clue.id} clue={clue} />
        ))}
      </div>
    )
  }
}

export class LinkedCategory extends Component {
  render() {
    const { category } = this.props

    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <Category category={category} />
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => ({ category })

const connectedCategory = connect(mapStateToProps)(LinkedCategory)

export default connectedCategory
