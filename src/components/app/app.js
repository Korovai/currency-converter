// Base
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import HomePage from '../pages/home-page'
import CurrencyList from '../pages/currency-list'

import './app.css'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/currency" component={CurrencyList} />
    </Switch>
  )
}

export default App
