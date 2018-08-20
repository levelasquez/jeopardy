import * as actions from './'
import { categories } from '../data/fixtures'

describe('redux actions', () => {
  test('creates an action to set categories', () => {
    const result = actions.setCategories(categories)
    const expectedAction = {
      type: actions.SET_CATEGORIES,
      categories,
    }

    expect(result).toEqual(expectedAction)
  })

  test('creates an action to pick a category', () => {
    const category = categories[0]
    const result = actions.pickCategory(category)
    const expectedAction = {
      type: actions.PICK_CATEGORY,
      category,
    }

    expect(result).toEqual(expectedAction)
  })
})
