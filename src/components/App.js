import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategories } from '../actions'

class App extends Component {
  componentDidMount() {
    const { categories, setCategories } = this.props

    if (categories.length === 0) {
      fetch('http://jservice.io/api/categories?count=20')
        .then(response => response.json())
        .then(json => setCategories(json))
    }
  }

  render() {
    const { categories } = this.props

    return (
      <div>
        <h2>Jeopardy</h2>
        {categories.map(category => (
          <div key={category.id}>
            <Link to='/category'>
              <h4>{category.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ categories: state })

const connectedApp = connect(mapStateToProps, { setCategories })(App)

export default connectedApp
