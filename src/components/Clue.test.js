import React from 'react'
import { shallow } from 'enzyme'
import Clue from './Clue'
import { clue } from '../data/fixtures'

const props = {
  clue,
}

describe('Clue component', () => {
  let clueWrapper = shallow(<Clue {...props} />)

  test('renders the clue value', () => {
    const value = clueWrapper.find('h4').text()

    expect(value).toEqual(clue.value.toString())
  })

  test('renders the clue question', () => {
    const question = clueWrapper.find('h5').at(0).text()

    expect(question).toEqual(clue.question)
  })

  test('renders the clue answer', () => {
    const answer = clueWrapper.find('h5').at(1).text()

    expect(answer).toEqual(clue.answer)
  })

  test('sets the answer with the `text-hidden` class', () => {
    const className = clueWrapper.find('h5').at(1).hasClass('text-hidden')

    expect(className).toBe(true)
  })

  test('initializes the `reveal` state to be `false`', () => {
    const reveal = clueWrapper.state().reveal

    expect(reveal).toBe(false)
  })

  describe('when rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined

      clueWrapper = shallow(<Clue {...props} />)
    })

    test('displays the value as `unknown`', () => {
      const value = clueWrapper.find('h4').text()

      expect(value).toEqual('unknown')
    })
  })

  describe('when clicking on the clue', () => {
    beforeEach(() => clueWrapper.simulate('click'))

    test('sets the `reveal` state to be true', () => {
      const state = clueWrapper.state().reveal

      expect(state).toBe(true)
    })

    test('sets the answer with the `text-revealed` class', () => {
      const className = clueWrapper.find('h5').at(1).hasClass('text-revealed')

      expect(className).toBe(true)
    })
  })
})