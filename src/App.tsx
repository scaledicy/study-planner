import Login from 'containers/Login/Login'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Lessons from './containers/Lessons/Lessons'
import BaseLayout from './components/BaseLayout/BaseLayout'

function App() {
  return (
    <>
      <BaseLayout>
        <Switch>
          <Route exact path='/'>
            <Lessons />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </BaseLayout>
    </>
  )
}

export default App
