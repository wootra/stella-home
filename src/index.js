import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import './index.css'
// import App from './views/App/App';
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

import indexRoutes from 'routes/index.jsx'
import 'assets/scss/material-kit-react.css?v=1.1.0'
import { CssBaseline } from '../node_modules/@material-ui/core'
require('dotenv').config()

// ReactDOM.render(<App />, document.getElementById('root'));
console.log(process.env.API_URL)

ReactDOM.render(
  <Provider store={applyMiddleware(ReduxPromise)(createStore)(reducers)}>
    <Router>
      <div>
        {/* <div className="row">
          <div className="btn-group">
            {
              indexRoutes.map((prop, key) => {
                return (
                  <NavLink to={prop.path} key={"nav_" + key}>
                    <button className="btn btn-primary"><span>{prop.name}</span></button>
                  </NavLink>
                )
              })
            }
          </div>
        </div> */}
        <React.Fragment>
          <CssBaseline />
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  key={'route' + key}
                  component={prop.component}
                />
              )
            })}
          </Switch>
        </React.Fragment>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
