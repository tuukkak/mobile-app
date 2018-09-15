import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from 'ducks/authentication';
import SignUp from './SignUp';

const SignUpForm = reduxForm({ form: 'SignUpForm' })(SignUp);

export default connect(
    null,
    { signUp }
)(SignUpForm);
