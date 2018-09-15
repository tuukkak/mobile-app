import { reduxForm } from 'redux-form';
import SignIn from './SignIn';

export default reduxForm({ form: 'SignInForm' })(SignIn);
