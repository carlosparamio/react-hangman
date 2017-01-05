import { connect } from 'react-redux';
import SpacedText from '../components/SpacedText';

const mapStateToProps = (state, ownProps) => ({
  text: state.guessedWord
});

const GuessedWord = connect(mapStateToProps)(SpacedText);

export default GuessedWord;