import { NEW_WORD } from './constants';
import { TRY_LETTER } from './constants';

export const newWord = (word) => ({
  type: NEW_WORD,
  payload: word
});

export const tryLetter = (letter) => ({
  type: TRY_LETTER,
  payload: letter
});