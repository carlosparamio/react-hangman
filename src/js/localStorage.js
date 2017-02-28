import store from 'store';

export const loadState = () => {
  try {
    const serializedState = store.get('hangman');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    store.set('hangman', serializedState);
  } catch (err) {
    // Ignore errors
  }
}