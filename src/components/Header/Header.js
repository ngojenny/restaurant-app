import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'

import Button from '../Button/Button'


class Header extends Component {
  logout = (e) => {
    e.preventDefault()
    const history = createHistory({forceRefresh: true})
    history.push('/')
  }

  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          <Button text='Logout' link='#' type='logout' eventHandler={(e) => this.logout(e)} />
        </div>
      </header>
    )
  }
}

export default Header