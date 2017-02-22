import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Button from '../components/Button';
import AttemptsCounter from '../containers/AttemptsCounter';
import GuessedWord from '../containers/GuessedWord';
import Hangman from '../containers/Hangman';
import LetterButton from '../containers/LetterButton';
import { newWord } from '../actions';
import words from '../words';

class App extends React.Component {

  static propTypes = {
    word: PropTypes.string,
    started: PropTypes.bool,
    victory: PropTypes.bool,
    defeat: PropTypes.bool
  }

  getLetters() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  }

  render() {
    if (this.props.started) {
      if (this.props.victory) {
        return this._renderVictory()
      } else if (this.props.defeat) {
        return this._renderDefeat()
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
        <p><Hangman /></p>
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

  _renderDefeat() {
    return (
      <div>
        <p><Hangman /></p>
        <p>Sorry, you lost! The word was: <strong>{this.props.word}</strong></p>
        <p>{this._renderNewGameButton()}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  word: state.word, // Move to component
  started: !!state.word,
  victory: state.word === state.guessedWord,
  defeat: state.failedAttempts >= 6
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGameClick: () => {
    dispatch(newWord(words[Math.floor(Math.random() * words.length)]));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);