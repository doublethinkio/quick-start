import { createStore } from 'easy-peasy'
import counterModel from '../../app/common/third-party/easy-peasy/models/counter'

test('increment action', async () => {
  // arrange
  const store = createStore(counterModel)
  // act
  store.getActions().increment()

  // assert
  expect(store.getState().count).toEqual(1)
})

test('decrement action', async () => {
  // arrange
  const store = createStore(counterModel)
  // act
  store.getActions().decrement()

  // assert
  expect(store.getState().count).toEqual(-1)
})

test('incrementIfOdd action', async () => {
  // arrange
  const store = createStore(counterModel)

  // act
  store.getActions().incrementIfOdd()
  // assert
  expect(store.getState().count).toEqual(0)

  store.getActions().increment()
  expect(store.getState().count).toEqual(1)

  // act
  store.getActions().incrementIfOdd()
  // assert
  expect(store.getState().count).toEqual(2)
})

test('incrementAsync thunk', async () => {
  // arrange
  const store = createStore(counterModel)

  // act
  await store.getActions().incrementAsync()
  // assert
  expect(store.getState().count).toEqual(1)
})
