import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Page1" >Page1</Link>
              </li>
              <li>
                <Link to="/Page2" >Page2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Redirect exact from='/' to='/Page1' />
            <Route path='/Page1'>
              <Page1 />
            </Route>
            <Route path='/Page2'>
              <Page2 />
            </Route>
            <Route path='/'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
