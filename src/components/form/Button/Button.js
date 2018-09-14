import React from 'react';
import { Button } from 'react-native-elements';

export default class StyledButton extends React.Component {
    render() {
        return <Button raised rounded buttonStyle={defaultStyle} {...this.props} />;
    }
}

const defaultStyle = {
    backgroundColor: '#22a3d5',
    marginVertical: 5
};
