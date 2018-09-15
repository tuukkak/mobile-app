import React from 'react';
import { View } from 'react-native';
import { Field } from 'redux-form';
import TextInput from 'components/form/TextInput';
import Button from 'components/form/Button';

export default class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign in'
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <View>
                <Button
                    title="Sign in with Facebook"
                    icon={{ name: 'facebook', type: 'font-awesome' }}
                    buttonStyle={{ backgroundColor: '#3b5998' }}
                    onPress={() => {}}
                />
                <Field name="email" component={TextInput} label="Email" />
                <Field name="password" component={TextInput} label="Password" />
                <Button title="Sign in" onPress={handleSubmit(submit)} />
            </View>
        );
    }
}

const submit = values => {
    console.log('submitting', values);
};
