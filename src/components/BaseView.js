import React from 'react';
import { connect } from 'react-redux';
import { getToken } from 'services/session-storage';
import { storeToken } from 'ducks/authentication';
import IntroNavigation from 'components/content/intro/Navigation';
import MainNavigation from 'components/content/main/Navigation';

class BaseView extends React.Component {
    componentDidMount() {
        if (!this.props.token)
            getToken().then(token => {
                this.props.storeToken(token);
            });
    }

    render() {
        return this.props.token ? <MainNavigation /> : <IntroNavigation />;
    }
}

const mapStateToProps = state => ({
    token: state.authentication.token
});

export default connect(
    mapStateToProps,
    { storeToken }
)(BaseView);
