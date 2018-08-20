import React from 'react'
import { mount, shallow } from 'enzyme'
import { fakeServer } from 'sinon'
import { Category, LinkedCategory } from './Category'
import { categories, clues } from '../data/fixtures'

const props = { category: categories[0] }

describe('Category component', () => {
  let server

  beforeEach(() => {
    server = fakeServer.create()

    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clues),
      ],
    )
  })

  describe('when creating a new category', () => {
    let category

    beforeEach(done => {
      category = mount(<Category {...props} />)

      server.respond()

      setTimeout(() => {
        category.update()
        done()
      })
    })

    test('initializes the clues in state', () => {
      const state = category.state().clues

      expect(state).toEqual(clues)
    })

    test('renders the category title', () => {
      const title = category.find('h2').text()

      expect(title).toEqual(props.category.title)
    })

    test('renders the correct numbers of clues', () => {
      const numberOfClues = category.find('Clue').length

      expect(numberOfClues).toEqual(clues.length)
    })
  })
})

describe('LinkedCategory component', () => {
  const linkedCategory = shallow(< LinkedCategory />)

  test('creates the link to navigate home', () => {
    const link = linkedCategory.find('Link h4').text()

    expect(link).toEqual('Home')
  })

  test('creates a category component', () => {
    const categoryComponent = linkedCategory.find('Category').exists()

    expect(categoryComponent).toBe(true)
  })
})
