import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Webpage from 'components'

ReactDOM.render(
  <Provider store={store}>
    <Webpage />
  </Provider>,
  document.getElementById('root')
)
