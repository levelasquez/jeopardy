import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Category extends Component {
  render() {
    const { category } = this.props
    console.log({ category })
    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h2>Category title</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => ({ category })

const connectedCategory = connect(mapStateToProps)(Category)

export default connectedCategory
