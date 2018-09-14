import React from 'react';
import { View } from 'react-native';
import TextInput from 'components/form/TextInput';
import Button from 'components/form/Button';

export default class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Sign up'
    };

    render() {
        return (
            <View>
                <Button
                    title="Sign in with Facebook"
                    icon={{ name: 'facebook', type: 'font-awesome' }}
                    buttonStyle={{ backgroundColor: '#3b5998' }}
                    onPress={() => {}}
                />
                <TextInput label="First name" />
                <TextInput label="Last name" />
                <TextInput label="Email" />
                <TextInput label="password" />
                <Button title="Let's start" onPress={() => {}} />
            </View>
        );
    }
}
