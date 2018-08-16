import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { categories } from '../data/fixtures'

const props = {
  categories,
}

describe('App component', () => {
  const app = shallow(<App {...props} />)

  test('renders the title properly', () => {
    const title = app.find('h2').text()

    expect(title).toEqual('Jeopardy')
  })

  test('creates the correct number of links', () => {
    const linkNumbers = app.find('Link').length

    expect(linkNumbers).toEqual(categories.length)
  })

  test('title the links correctly', () => {
    app.find('Link h4').forEach((linkTitle, index) => {
      expect(linkTitle.text()).toEqual(categories[index].title)
    })
  })
})
