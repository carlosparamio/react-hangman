import { connect } from 'react-redux';
import Text from '../components/Text';

const mapStateToProps = (state, ownProps) => ({
  text: state.guessedWord
});

const GuessedWord = connect(mapStateToProps)(Text);

export default GuessedWord;