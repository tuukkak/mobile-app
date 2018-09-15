import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from 'ducks/authentication';
import SignIn from './SignIn';

const SignInForm = reduxForm({ form: 'SignInForm' })(SignIn);

export default connect(
    null,
    { signIn }
)(SignInForm);
