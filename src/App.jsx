import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Components/pages/Home'
import User from './Components/pages/User'
import About from './Components/pages/About'
import Time from './Components/Time/Time'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/times'>Time</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <User />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/times'>
            <Time />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
