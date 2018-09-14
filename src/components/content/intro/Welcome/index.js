import React from 'react';
import { View, Text } from 'react-native';
import Button from 'components/form/Button';

export default class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Button title="Let's start" onPress={() => this.props.navigation.navigate('Register')} />
                <Button title="I already have an account" onPress={() => this.props.navigation.navigate('SignIn')} />
            </View>
        );
    }
}
