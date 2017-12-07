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
    Switch
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class SwitchTest extends Component<{}> {

    constructor(){
        super();
        this.state={
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Swtich实例
                </Text>
                <Switch
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom:10,marginTop:10}}
                    value={this.state.falseSwitchIsOn}
                    onTintColor='red'// 打开的背景颜色
                    thumbTintColor='red'// 触摸点颜色
                    tintColor='red'// 关闭的背景颜色
                />
                <Switch
                    onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn} />
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
});
