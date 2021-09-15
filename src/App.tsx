import Login from 'containers/Login/Login'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Lessons from './containers/Lessons/Lessons'
import BaseLayout from './components/BaseLayout/BaseLayout'
import NotFound from './containers/NotFound/NotFound'

function App() {
  return (
    <BaseLayout>
      <Switch>
        <Route exact path='/'>
          <Lessons />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BaseLayout>
  )
}

export default App
