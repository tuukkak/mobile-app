import React from 'react';
import { Button } from 'react-native-elements';

export default class StyledButton extends React.Component {
    render() {
        const style = this.props.clear ? { ...defaultStyle, backgroundColor: 'transparent' } : defaultStyle;
        return <Button raised rounded buttonStyle={style} fontWeight={'bold'} fontSize={16} {...this.props} />;
    }
}

const defaultStyle = {
    backgroundColor: '#22a3d5',
    marginVertical: 5
};
