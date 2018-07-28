import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

import Avatar from '../components/Avatar/Avatar'

class GroupsPage extends Component {
  state = {
    groups: [],
    loading: false, 
    userId: this.props.match.params.userId
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

  sendToIndividualGroup = (e, userId, groupId) => {
    e.preventDefault()
    console.log('hello', userId, groupId)
    this.props.history.push(`/groups/${userId}/${groupId}`);
  }

  render() {
    console.log(this.state)
    const { groups } = this.state
    const { userId } = this.state 
    return (
      <main className="groups-page">
        <section href="#">
          <div className="wrapper">
            {groups.map(group => (
              <div className="card groups-page__card" key={group._id} onClick={(e) => this.sendToIndividualGroup(e, userId, group._id)}>
                <p className="heading-3">{group.name}</p>
                {group.users.map((user, i) => {
                  return <Avatar key={i} firstName={user.firstName} lastName={user.lastName}/>
                })}
              </div>
            ))}
          </div>
        </section>
      </main>
    )
  }
}

export default GroupsPage