import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import GroupsPage from './pages/GroupsPage'

class App extends Component {

  async componentDidMount () {
    // try {
    //   const response = await axios.get('/healthcheck') // will return a promise and that is thenable
    //   // console.log('hello!') called blocking: this line will not run until line above is complete
    //   console.log(response.data)
    // } catch (error) {
    //   console.log(error)
    // }
    console.log('mounted');
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' exact component={LoginPage} />
          <Route path='/groups/:userId' component={GroupsPage} />
        </div>
      </Router>
    )
  }
}

export default App