import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../Home';
import ProfileScreen from '../Profile';

const HomeStack = createStackNavigator({
    Home: HomeScreen
});

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen
});

export default createBottomTabNavigator({
    Home: HomeStack,
    Profile: ProfileStack
});
