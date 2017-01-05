import { NEW_WORD } from './constants';
import { TRY_LETTER } from './constants';
import { generateGuessedWord, letterAlreadyAttempted } from './helpers';

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_WORD:
      var newWord = action.payload;
      var newAttemptedLetters = [];
      return {
        word: newWord,
        guessedWord: generateGuessedWord(newWord, newAttemptedLetters),
        attemptedLetters: newAttemptedLetters
      }
    case TRY_LETTER:
      var newLetter = action.payload;
      if (letterAlreadyAttempted(newLetter)) {
        return state;
      } else {
        var newAttemptedLetters = [...state.attemptedLetters, newLetter]
        var newGuessedWord = generateGuessedWord(state.word, newAttemptedLetters)
        return {
          ...state,
          attemptedLetters: newAttemptedLetters,
          guessedWord: newGuessedWord
        }
      }
    default:
      return state;
  }
}

export default reducer;