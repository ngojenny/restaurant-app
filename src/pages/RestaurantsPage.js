import React, { Component } from 'react'
import axios from 'axios'

import RestaurantPreview from '../components/RestaurantPreview/RestaurantPreview'

class RestaurantsPage extends Component {
  state = {
    restaurants: [],
    loading: false, 
    userId: this.props.match.params.userId
  }

  async componentDidMount() {
    const res = await axios.get(`/groups/${this.props.match.params.userId}/${this.props.match.params.groupId}`)
    console.log('res restaur', res)
    const restaurants = res.data.restaurants
    this.setState({
      restaurants
    })
  }

  sendToIndividualRestaurant = () => {
    console.log('gonna send ya')
  }

  render() {
    console.log('restaurant', this.state)
    const { restaurants } = this.state
    return (
      <div>
        {restaurants.map(restaurant => <RestaurantPreview key={restaurant._id} info={restaurant} sendToRestaurant={this.sendToIndividualRestaurant}/>)}
      </div>
    )
  }
}

export default RestaurantsPage