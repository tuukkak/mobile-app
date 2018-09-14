import React from 'react';
import { Button } from 'react-native-elements';

export default class StyledButton extends React.Component {
    render() {
        return <Button raised rounded buttonStyle={defaultStyle} {...this.props} />;
    }
}

const defaultStyle = {
    backgroundColor: 'rgb(34, 163, 213)',
    marginVertical: 10
};
