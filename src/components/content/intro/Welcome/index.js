import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import Button from 'components/form/Button';

export default class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    render() {
        return (
            <ImageBackground source={require('images/barren.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>Welcome</Text>
                    </View>
                    <View style={{ marginBottom: 50 }}>
                        <Button title="Let's start" onPress={() => this.props.navigation.navigate('Register')} />
                        <Button
                            title="I already have an account"
                            onPress={() => this.props.navigation.navigate('SignIn')}
                        />
                    </View>
            </ImageBackground>
        );
    }
}
