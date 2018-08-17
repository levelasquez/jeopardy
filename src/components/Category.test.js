import React from 'react'
import { mount } from 'enzyme'
import { Category } from './Category'
import { categories } from '../data/fixtures'

const props = { category: categories[0] }

describe('Category component', () => {
  const category = mount(<Category {...props} />)

  test('', () => {})
})