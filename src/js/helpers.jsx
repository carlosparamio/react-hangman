export const generateGuessedWord = (word, letters) => {
  return word.split("").map((letter) => {
    return letterAlreadyAttempted(letters, letter) ? letter : "_"
  }).join("")
}

export const letterAlreadyAttempted = (attemptedLetters, letter) => {
  return attemptedLetters.indexOf(letter) >= 0
}