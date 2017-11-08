import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';

/**
 * 处理文本输入
 */
export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    // onChangeText 可用于制作实时搜索
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {/*{this.state.text}*/}
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}