import { connect } from 'react-redux';
import { tryLetter } from '../actions';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => ({
  active: !state.attemptedLetters.has(ownProps.label)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(tryLetter(ownProps.label))
  }
})

const LetterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default LetterButton;