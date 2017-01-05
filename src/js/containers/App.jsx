import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Button from '../components/Button';
import AttemptsCounter from '../containers/AttemptsCounter';
import GuessedWord from '../containers/GuessedWord';
import LetterButton from '../containers/LetterButton';
import { newWord } from '../actions';
import words from '../words';

class App extends React.Component {

  static propTypes = {
    word: PropTypes.string,
    guessedWord: PropTypes.string,
    onNewGameClick: PropTypes.func
  }

  getLetters() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  }

  victoryAchieved() {
    return this.props.word === this.props.guessedWord
  }

  render() {
    if (this.props.word) {
      if (this.victoryAchieved()) {
        return this._renderVictory()
      } else {
        return this._renderGame()
      }
    } else {
      return this._renderStart()
    }
  }

  _renderStart() {
    return <p>{this._renderNewGameButton()}</p>
  }

  _renderGame() {
    return (
      <div>
        <p><GuessedWord /></p>
        <p>Attempts: <AttemptsCounter /></p>
        <p>
          {
            this.getLetters().map((letter, index) => {
              return <LetterButton key={index} label={letter} />;
            })
          }
        </p>
        <p>{this._renderNewGameButton()}</p>
      </div>
    )
  }

  _renderNewGameButton() {
    return <Button label="New Game" onClick={this.props.onNewGameClick} />
  }

  _renderVictory() {
    return (
      <div>
        <p><GuessedWord /></p>
        <p>Congratulations! You won!</p>
        <p>{this._renderNewGameButton()}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  word: state.word,
  guessedWord: state.guessedWord
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGameClick: () => {
    dispatch(newWord(words[Math.floor(Math.random() * words.length)]));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);