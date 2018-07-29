import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RestaurantPreview extends Component {
  render() {
    const { info } = this.props 
    console.log('info', info)
    return (
      <div className="card restaurant-page__card">
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
        <Link to={`restaurant/${info._id}`}>More details <i className="fas fa-chevron-right"></i></Link>
      </div>
    )
  }
}

export default RestaurantPreview