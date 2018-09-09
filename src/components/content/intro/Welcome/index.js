import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Welcome extends React.Component {
    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Button title="Let's start" onPress={() => this.props.navigation.navigate('Register')} />
                <Button title="Log in" onPress={() => this.props.navigation.navigate('LogIn')} />
            </View>
        );
    }
}
