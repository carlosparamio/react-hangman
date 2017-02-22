import { NEW_WORD } from './constants';
import { TRY_LETTER } from './constants';
import { generateGuessedWord, wasLetterAlreadyAttempted, isLetterPresentAtWord } from './helpers';

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_WORD:
      var newWord = action.payload;
      var newAttemptedLetters = [];
      return {
        word: newWord,
        guessedWord: generateGuessedWord(newWord, newAttemptedLetters),
        attemptedLetters: newAttemptedLetters,
        failedAttempts: 0
      }
    case TRY_LETTER:
      var newLetter = action.payload;
      if (wasLetterAlreadyAttempted(state.attemptedLetters, newLetter)) {
        return state;
      } else {
        var newAttemptedLetters = [...state.attemptedLetters, newLetter];
        var newfailedAttempts = isLetterPresentAtWord(state.word, newLetter) ? state.failedAttempts : state.failedAttempts + 1;
        var newGuessedWord = generateGuessedWord(state.word, newAttemptedLetters);
        return {
          ...state,
          attemptedLetters: newAttemptedLetters,
          guessedWord: newGuessedWord,
          failedAttempts: newfailedAttempts
        }
      }
    default:
      return state;
  }
}

export default reducer;