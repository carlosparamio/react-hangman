import React, { PropTypes } from 'react';

class HangmanImage extends React.Component {
  static propTypes = {
    level: PropTypes.number
  }

  render() {
    return (
      <img src={require(`../../img/hangman${this.props.level}.png`)} />
    )
  }
}

export default HangmanImage