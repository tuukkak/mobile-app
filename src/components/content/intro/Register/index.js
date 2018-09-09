import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default class Register extends React.Component {
    render() {
        return (
            <View>
                <TextInput />
                <TextInput />
                <TextInput />
                <TextInput />
                <Button title="Let's start" onPress={() => this.props.navigation.navigate('Register')} />
            </View>
        );
    }
}
