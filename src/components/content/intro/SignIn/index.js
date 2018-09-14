import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import TextInput from 'components/form/TextInput';
import Button from 'components/form/Button';

export default class SignIn extends React.Component {
    render() {
        return (
            <View>
                <SocialIcon title="Sign in with Facebook" button type="facebook" />
                <TextInput label="Email" />
                <TextInput label="Password" />
                <Button title="Sign in" onPress={() => {}} />
            </View>
        );
    }
}
