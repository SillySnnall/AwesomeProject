/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 避免输入键盘遮挡
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class KeyboardAvoidingViewTest extends Component<{}> {
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.welcome}/>
                {/*<Image source={logo} style={styles.logo}/>*/}
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                />
                <View style={{height: 60}}/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        flex:1,
    },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});
