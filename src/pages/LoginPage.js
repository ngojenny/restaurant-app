import React, { Component } from 'react'
import axios from 'axios'
// import createHistory from 'history/createBrowserHistory' 

// const history = createHistory()

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
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

    try {
      const response = await axios.post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      console.log('response', response)
      if(response) {
        const userId = response.data._id
        this.props.history.push(`/groups/${userId}`)
      }
    } catch(e) {
      console.log(e, `no users/match`);
    }
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
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email'/>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password'/>
          <input type="submit" value="login"/>
        </form>
        <button onClick={this.getUsers}>Grab users</button>
      </div>
    )
  }
}

export default LoginPage