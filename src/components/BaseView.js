import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'ducks/authentication';
import MainNavigation from 'components/content/main/Navigation';
import IntroNavigation from 'components/content/intro/Navigation';

class BaseView extends React.Component {
    componentDidMount() {
        if (!this.props.token) this.props.fetchToken();
    }

    render() {
        if (this.props.loading) return <View />;
        else if (this.props.token) return <MainNavigation />;
        else return <IntroNavigation />;
    }
}

const mapStateToProps = state => ({
    token: state.authentication.token,
    loading: state.authentication.loading
});

export default connect(
    mapStateToProps,
    { fetchToken }
)(BaseView);
