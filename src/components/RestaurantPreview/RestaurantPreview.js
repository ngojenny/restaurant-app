import React, { Component } from 'react'

class RestaurantPreview extends Component {
  render() {
    const { info } = this.props 
    return (
      <div className="card restaurant-page__card" onClick={(e) => this.props.sendToRestaurant(e)}>
        <h3>{info.name}</h3>
        <div className="restaurant-page__ratings-price">
          <div className={`ratings-bar ratings-bar-${info.rating}`}>
            <i className="far fa-smile"></i>
            <i className="far fa-smile"></i>
            <i className="far fa-smile"></i>
            <i className="far fa-smile"></i>
            <i className="far fa-smile"></i>
          </div>
          <span>{`$`.repeat(info.price)}</span>
        </div>
        <div className="restaurant-page__preview-info">
          <p>
            <span className="preview-label">Location:</span>
            {info.location}
          </p>
          <p>
            <span className="preview-label">Near by:</span>
            {info.nearby}
          </p>
          <p>
            <span className="preview-label">Cuisine:</span>
            {info.cuisine}
          </p>
          <p>
            <span className="preview-label">Top pick:</span>
            {info.topPicks[0]}
          </p>
        </div>
      </div>
    )
  }
}

export default RestaurantPreview