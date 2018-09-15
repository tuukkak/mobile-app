import React from 'react';
import { View } from 'react-native';
import { Field } from 'redux-form';
import TextInput from 'components/form/TextInput';
import Button from 'components/form/Button';

export default class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Sign up'
    };

    render() {
        const { handleSubmit, signUp } = this.props;
        return (
            <View>
                <Button
                    title="Sign in with Facebook"
                    icon={{ name: 'facebook', type: 'font-awesome' }}
                    buttonStyle={{ backgroundColor: '#3b5998' }}
                    onPress={() => {}}
                />
                <Field name="first_name" component={TextInput} label="First name" />
                <Field name="last_name" component={TextInput} label="Last name" />
                <Field name="email" component={TextInput} label="Email" />
                <Field name="password" component={TextInput} label="password" />
                <Button title="Let's start" onPress={handleSubmit(signUp)} />
            </View>
        );
    }
}
