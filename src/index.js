import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RootContainer from './containers/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(RootContainer)

const reactAppContainer = document.getElementById('root')
if (module.hot) {

  module.hot.accept()
  render(RootContainer)

  //module.hot.accept('./containers/Root.js', () => render(RootContainer))
}