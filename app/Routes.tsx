/* eslint react/jsx-props-no-spreading: off */
import React from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import routes from './constants/routes.json'
import App from './containers/App'
import HomePage from './containers/pages/Home'

// Lazily load routes and code split with webpacck
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/pages/Counter')
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
)

export default function Routes() {
  return (
    <App>
      <Router>
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </Router>
    </App>
  )
}
