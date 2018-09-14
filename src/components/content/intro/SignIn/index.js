import React from 'react';
import { View } from 'react-native';
import TextInput from 'components/form/TextInput';
import Button from 'components/form/Button';

export default class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign in'
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
                <TextInput label="Email" />
                <TextInput label="Password" />
                <Button title="Sign in" onPress={() => {}} />
            </View>
        );
    }
}
