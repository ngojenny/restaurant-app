import React, { Component } from 'react'
// axios allows us to make requests to the backend
import axios from 'axios'

class App extends Component {
  async componentDidMount () {
    try {
      const response = await axios.get('/healthcheck') // will return a promise and that is thenable
      // console.log('hello!') called blocking: this line will not run until line above is complete
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    return (
      <div>Hello world.</div>
    )
  }
}

export default App