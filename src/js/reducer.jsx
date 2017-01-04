import { NEW_WORD } from './constants';
import { TRY_LETTER } from './constants';

const generateGuessedWord = (word, letters) => {
  return word.split("").map((letter) => {
    return letters.has(letter) ? letter : "_"
  }).join("")
}

const initialState = {
  word: undefined,
  guessedWord: undefined,
  attemptedLetters: new Set
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_WORD:
      var newWord = action.payload;
      var newAttemptedLetters = new Set;
      return {
        word: newWord,
        guessedWord: generateGuessedWord(newWord, newAttemptedLetters),
        attemptedLetters: newAttemptedLetters
      }
    case TRY_LETTER:
      var newAttemptedLetters = new Set(state.attemptedLetters)
      newAttemptedLetters.add(action.payload)
      var newGuessedWord = generateGuessedWord(state.word, newAttemptedLetters)
      return {
        ...state,
        attemptedLetters: newAttemptedLetters,
        guessedWord: newGuessedWord
      }
    default:
      return state;
  }
}

export default reducer;