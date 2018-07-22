import React, { Component, Fragment } from 'react'

class Avatar extends Component {
  returnInitials = () => {
    const firstInt = this.props.firstName.charAt(0);
    const lastInt = this.props.lastName.charAt(0);
    const initial = `${firstInt} ${lastInt}`;

    return initial;
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        {(this.props.firstName && this.props.firstName) && <span className="avatar">{this.returnInitials()}</span>
        }
      </Fragment>
    )
  }
}

export default Avatar