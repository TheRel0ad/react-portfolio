import Navbar from 'components/Navbar'
import Home from 'pages/Home'
import Create from 'pages/Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import BlogDetails from 'pages/BlogDetails'
import SentImg from 'pages/SentImg'

const App = () => {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route>
            <Route path="/create">
              <Create />  
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />  
            </Route>
            <Route path="/form-data">
              <SentImg />  
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App