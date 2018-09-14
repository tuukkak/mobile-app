import { createStackNavigator } from 'react-navigation';
import Welcome from '../Welcome';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

export default createStackNavigator({
    Welcome,
    SignUp,
    SignIn
}, {
    navigationOptions: {
        headerBackTitle: null
    }
});
