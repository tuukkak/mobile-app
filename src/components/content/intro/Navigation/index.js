import { createStackNavigator } from 'react-navigation';
import Welcome from '../Welcome';
import LogIn from '../LogIn';
import Register from '../Register';

export default createStackNavigator({
    Welcome,
    Register,
    LogIn
});
