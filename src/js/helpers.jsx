export const generateGuessedWord = (word, letters) => {
  return word.split("").map((letter) => {
    return wasLetterAlreadyAttempted(letters, letter) ? letter : "_"
  }).join("")
}

export const wasLetterAlreadyAttempted = (attemptedLetters, letter) => {
  return attemptedLetters.indexOf(letter) >= 0
}

export const isLetterPresentAtWord = (word, letter) => {
  return word.indexOf(letter) >= 0
}