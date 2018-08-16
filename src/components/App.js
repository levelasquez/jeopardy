import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategories, pickCategory } from '../actions'

class App extends Component {
  componentDidMount() {
    const { categories, setCategories } = this.props

    if (categories.length === 0) {
      fetch('http://jservice.io/api/categories?count=20')
        .then(response => response.json())
        .then(json => setCategories(json))
    }
  }

  handleCategory = category => () => {
    const { pickCategory } = this.props

    pickCategory(category)
  }

  render() {
    const { categories } = this.props

    return (
      <div>
        <h2>Jeopardy</h2>
        {categories.map(category => (
          <div key={category.id}>
            <Link
              to='/category'
              onClick={this.handleCategory(category)}
            >
              <h4>{category.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories })

const connectedApp = connect(mapStateToProps, { setCategories, pickCategory })(App)

export default connectedApp
