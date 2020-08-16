import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { createStore, StoreProvider, Store } from 'easy-peasy'
import storeModel, {
  StoreModel,
} from 'app/common/third-party/easy-peasy/models'
import Counter from 'app/features/counter/Counter'

// https://testing-library.com/docs/react-testing-library/intro
// https://testing-library.com/docs/example-react-router
function renderWithRouter(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    store = createStore(storeModel),
  }: { route?: string; history?: MemoryHistory; store?: Store<StoreModel> } = {}
) {
  // eslint-disable-next-line react/prop-types
  const Wrapper: React.FC = ({ children }) => (
    // https://easy-peasy.now.sh/docs/testing/testing-components.html
    <StoreProvider store={store}>
      <Router history={history}>{children}</Router>
    </StoreProvider>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

test('Counter', async () => {
  // arrange
  // act
  const app = renderWithRouter(<Counter />)
  const { getByTestId, getByText, getByTitle } = app

  // assert
  expect(getByTestId('count').textContent).toEqual('0')

  // act
  fireEvent.click(getByTitle('plus'))
  // assert
  expect(getByTestId('count').textContent).toEqual('1')

  // act
  fireEvent.click(getByText('odd'))
  // assert
  expect(getByTestId('count').textContent).toEqual('2')

  // act
  fireEvent.click(getByTitle('minus'))
  // assert
  expect(getByTestId('count').textContent).toEqual('1')

  // act
  fireEvent.click(getByText('async'))
  // wait assert pass
  await waitFor(() => expect(getByTestId('count').textContent).toEqual('2'))
})
