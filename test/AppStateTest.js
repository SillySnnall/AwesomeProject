/**
 * 判断应用在后台还是前台
 */
import React, {Component} from 'react'
import {AppState, Text} from 'react-native'

export default class AppStateTest extends Component {

    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!应用已经处于前台，会多次调用')
        } else {
            console.log('App has come to the background!应用已经处于后台，会多次调用')
        }
        this.setState({appState: nextAppState});
    }

    render() {
        return (
            <Text>Current state is: {this.state.appState}</Text>
        );
    }

}