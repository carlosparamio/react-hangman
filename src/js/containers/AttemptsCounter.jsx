import { connect } from 'react-redux';
import Text from '../components/Text';

const mapStateToProps = (state, ownProps) => ({
  text: state.attemptedLetters.size.toString()
});

const AttemptsCounter = connect(mapStateToProps)(Text);

export default AttemptsCounter;