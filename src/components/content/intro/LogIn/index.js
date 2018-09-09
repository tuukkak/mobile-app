import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default class LogIn extends React.Component {
    render() {
        return (
            <View>
                <TextInput />
                <TextInput />
                <Button title="Log in" onPress={() => this.props.navigation.navigate('LogIn')} />
            </View>
        );
    }
}
