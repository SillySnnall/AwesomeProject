/**
 * 选择器
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PiexRatio,
    TouchableOpacity,
    Picker,
} from 'react-native';

export default class PickerTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null
        };
    }

    render() {
        return (
            <View >
                <Text>Picker组件</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={lang => this.setState({language: lang})}
                    mode="dialog"
                    style={{color: '#f00'}}
                >
                    <Picker.Item label="Java" value="Java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="C语言" value="c"/>
                    <Picker.Item label="PHP开发" value="php"/>
                </Picker>
                <Text>{this.state.language}</Text>
            </View>
        );
    }
}

