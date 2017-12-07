/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';

export default class Js2Android extends Component<{}> {
    constructor() {
        super()
        this.state = {
            contentx: 'asasasa'
        }
    }

    _toast() {
        NativeModules.ToastModule.show('toast', 1);
        NativeModules.ToastModule.getConstant((msg)=>{
            this.setState({
                contentx: msg
            });
            alert(msg);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    this._toast()
                }} style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text>{this.state.contentx}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
