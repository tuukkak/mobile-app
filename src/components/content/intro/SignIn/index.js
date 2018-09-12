import React from 'react';
import { View } from 'react-native';
import { SocialIcon, Button } from 'react-native-elements';
import TextInput from 'components/form/TextInput';

export default class SignIn extends React.Component {
    render() {
        return (
            <View>
                <SocialIcon title="Sign in with Facebook" button type="facebook" />
                <TextInput label="Email" />
                <TextInput label="Password" />
                <Button title="Sign in" raised rounded onPress={() => {}} />
            </View>
        );
    }
}
