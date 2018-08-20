import reducers from './'
import * as actions from '../actions'
import { categories, category } from '../data/fixtures'

describe('redux reducers', () => {
  test('returns the initial state', () => {
    const state = reducers({}, {})

    expect(state).toEqual({
      categories: [],
      category: {},
    })
  })

  test('sets categories', () => {
    const state = reducers({}, {
      type: actions.SET_CATEGORIES,
      categories,
    })

    expect(state).toEqual({
      categories,
      category: {},
    })
  })

  test('picks a category', () => {
    const state = reducers({}, {
      type: actions.PICK_CATEGORY,
      category,
    })

    expect(state).toEqual({
      categories: [],
      category,
    })
  })
})
