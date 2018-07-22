import React, { Component } from 'react'
import axios from 'axios'
import createHistory from 'history/createBrowserHistory' 

const history = createHistory()

class LoginPage extends Component {
  state = {
    name: '',
    email: '',
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const key = target.name;
    const state = this.state;
    state[key] = value;
    this.setState({
      ...state
    })
  }
  login = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(`/login/${this.state.name}/${this.state.email}`) // will return a promise and that is thenable
    //   // console.log('hello!') called blocking: this line will not run until line above is complete
    //   console.log('you logged in okay', response.data)
    // } catch (error) {
    //   console.log(error)
    // }
    history.push('/groups')
    
  }

  getUsers = async (e) => {
    try {
      const response = await axios.get('/users')
      console.log('we getting all the user, aka emily', response)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <form action='' onChange={this.handleChange} onSubmit={this.login}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name'/>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email'/>
          <input type="submit" value="login"/>
        </form>
        <button onClick={this.getUsers}>Grab users</button>
      </div>
    )
  }
}

export default LoginPage