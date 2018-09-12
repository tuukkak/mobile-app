import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Welcome extends React.Component {
    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Button title="Let's start" onPress={() => this.props.navigation.navigate('Register')} />
                <Button title="Sign in" onPress={() => this.props.navigation.navigate('SignIn')} />
            </View>
        );
    }
}
