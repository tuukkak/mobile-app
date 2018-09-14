import React from 'react';
import { Button } from 'react-native-elements';

export default class StyledButton extends React.Component {
    render() {
        const { clear, buttonStyle, ...rest } = this.props;
        return (
            <Button
                raised
                rounded
                buttonStyle={clearedStyle(clear, mergedStyle(buttonStyle))}
                fontWeight={'bold'}
                fontSize={16}
                {...rest}
            />
        );
    }
}

const mergedStyle = style => ({ ...defaultStyle, ...style });

const clearedStyle = (clear, style) => (clear ? { ...style, backgroundColor: 'transparent' } : style);

const defaultStyle = {
    backgroundColor: '#22a3d5',
    marginVertical: 5
};
