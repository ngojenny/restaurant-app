import React, { Component, Fragment } from 'react'
import Header from '../components/Header/Header'
import axios from 'axios'

class RestaurantSinglePage extends Component {
  state = {
  }

  async componentDidMount() {
    const res = await axios.get(`/restaurants/${this.props.match.params.restaurantId}`)
    console.log('res single',`/restaurant/${this.props.match.params.restaurantId}`, res);
  }

  render() {
    return (
      <Fragment>
        <Header title='RestApp' />
        <main>
          <section>
            <div className="wrapper">
            <div className="card restaurant-single-page__card">
              <h2></h2>
            </div>
            </div>
          </section>
        </main>
      </Fragment>
    )
  }
}

export default RestaurantSinglePage