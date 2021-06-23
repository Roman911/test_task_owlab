import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux'
import { News, Login } from './modules'
import { Home, NavBar, Profile } from './Components'
import { UseAuth } from './hooks/useAuth'

function App() {
  const { user: { data } } = useSelector(state => state)
  UseAuth()

  return <Router>
    <div>
      <NavBar userAuth={ data } />
      <Switch >
        <Route exact path='/' component={ Home } />
        <Route path='/news' component={ News } />
        <Route path='/profile' >
          { !data ? <Redirect to='/login' /> : <Profile /> }
        </Route>
        <Route path='/login' >
          { data ? <Redirect to='/profile' /> : <Login /> }
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App
