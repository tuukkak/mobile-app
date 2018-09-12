import { createStackNavigator } from 'react-navigation';
import Welcome from '../Welcome';
import SignIn from '../SignIn';
import Register from '../Register';

export default createStackNavigator({
    Welcome,
    Register,
    SignIn
});
