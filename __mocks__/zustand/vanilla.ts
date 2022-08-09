/**
 * @source https://docs.pmnd.rs/zustand/testing
 * @note adjusted for vanilla stores
 */
import { act } from 'react-dom/test-utils'
import vanillaCreate from 'zustand/vanilla'

// Variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set()

// When creating a store, we get its initial state, create a reset function and add it in the set
const create = (createState) => {
  const store = vanillaCreate(createState)
  const initialState = store.getState()
  storeResetFns.add(() => store.setState(initialState, true))
  return store
}

// Reset all stores after each test run
afterEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()))
})

export default create
