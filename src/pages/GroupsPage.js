import React, { Component } from 'react'
import axios from 'axios'

class GroupsPage extends Component {
  state = {
    groups: [],
    loading: false
  }

  async componentDidMount() {
    console.log('mounted')
    const res = await axios.get('/groups')
    const groups = res.data
    this.setState({
      groups
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <p>you're on the Groups page</p>
        {this.state.groups.map(group => (
          <div key={group._id}>
            <p className="heading-3">{group.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default GroupsPage