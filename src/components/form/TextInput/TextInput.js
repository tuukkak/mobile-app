import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';

export default class TextInput extends React.Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.string
    };

    render() {
        const { label, input: { onChange, ...restInput } } = this.props;
        return (
            <View>
                <FormLabel>{label}</FormLabel>
                <FormInput onChangeText={onChange} {...restInput} />
            </View>
        );
    }
}
