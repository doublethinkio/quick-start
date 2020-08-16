// https://easy-peasy.now.sh/docs/typescript-tutorial/adding-typed-actions.html
import { Action, action, Thunk, thunk } from 'easy-peasy' // 👈 import the type

export interface CounterModel {
  count: number
  increment: Action<CounterModel, void> // 👈 declaring our action
  incrementIfOdd: Action<CounterModel, void>
  decrement: Action<CounterModel, void>
  incrementAsync: Thunk<CounterModel, void, void> // https://easy-peasy.now.sh/docs/typescript-tutorial/adding-typed-thunks.html
}

const counterModel: CounterModel = {
  count: 0,
  increment: action((state) => {
    state.count += 1
  }),
  incrementIfOdd: action((state) => {
    if (state.count % 2 !== 0) {
      state.count += 1
    }
  }),
  decrement: action((state) => {
    state.count -= 1
  }),
  incrementAsync: thunk(async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.increment()
  }),
}

export default counterModel
