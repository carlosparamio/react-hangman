import { createStore } from 'redux';
import reducer from './reducer';
import { loadState, saveState } from './localStorage';

const defaultState = {
  word: undefined,
  guessedWord: undefined,
  attemptedLetters: [],
  failedAttempts: 0
}

const initialState = loadState() || defaultState;

const store = createStore(reducer, initialState);

store.subscribe(() => {
  saveState(store.getState());
})

export default store;