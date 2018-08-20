import React from 'react'
import { mount } from 'enzyme'
import { fakeServer } from 'sinon'
import { Category } from './Category'
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

      setTimeout(done)
    })

    test('logs the category', () => {
      category.update()
      console.log(category.debug())
    })
  })
})
