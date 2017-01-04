import React, { PropTypes } from 'react';

class Text extends React.Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <span>{this.props.text}</span>
    )
  }
}

export default Text