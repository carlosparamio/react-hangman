import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { newWord, tryLetter } from './actions';
import store from './store';
import Button from './components/Button';
import AttemptsCounter from './containers/AttemptsCounter';
import GuessedWord from './containers/GuessedWord';
import LetterButton from './containers/LetterButton';

var showState = function() {
  console.log(store.getState());
}

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

ReactDOM.render(
  <Provider store={store}>
    <div>
      <p><GuessedWord /></p>
      <p>Attempts: <AttemptsCounter /></p>
      <p>
        {
          letters.map((letter, index) => {
            return <LetterButton key={index} label={letter} />;
          })
        }
      </p>
      <p><Button label="Show State" onClick={showState} /></p>
    </div>
  </Provider>,
  document.getElementById('app')
);

store.dispatch(newWord("awesome"));