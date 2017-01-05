import { connect } from 'react-redux';
import { tryLetter } from '../actions';
import Button from '../components/Button';
import { letterAlreadyAttempted } from '../helpers';

const mapStateToProps = (state, ownProps) => ({
  active: !letterAlreadyAttempted(state.attemptedLetters, ownProps.label)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(tryLetter(ownProps.label))
  }
})

const LetterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default LetterButton;