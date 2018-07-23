import React, { Component } from 'react'
import axios from 'axios'

class GroupsPage extends Component {
  state = {
    groups: [],
    loading: false
  }

  async componentDidMount() {
    console.log('mounted', this.props)
    const res = await axios.get(`/groups/${this.props.match.params.userId}`)
    console.log('res', res)
    const groups = res.data.groups
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