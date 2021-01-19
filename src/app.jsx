import React from 'react'
import DropdownPage from 'pages/dropdown'
import NotFound from 'pages/notFound'
import data from './data.json'
import Button from 'components/button'
import {
  BrowserRouter as Router, 
  Link, 
  Switch, 
  Route
} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <div className="container mt-5">
        <Switch>

          <Route exact path='/'>
            { data.pageBttns.map(btn =>
              <Link to={`/${btn.page}`} key={btn.id} >
                <Button>{btn.text}</Button>
              </Link>
            ) }
          </Route>

          <Route path='/dropdown'>
            <DropdownPage data={data} />
          </Route>

          <Route component={ NotFound } />

        </Switch>
      </div>
    </Router>
  )
}

export default App