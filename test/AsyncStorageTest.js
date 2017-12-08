import React, {Component} from 'react';
import {View, AppRegistry, Button, AsyncStorage, Alert} from 'react-native';


const KEY = 'key';
/**
 * 显示图片
 */
export default class AsyncStorageTest extends Component {
    render() {
        return (
            <View>
                <Button title="存储" onPress={this._onSaveClick}/>
                <Button  title="取出" onPress={this._onTakeClick}/>
            </View>
        );
    }

    _onSaveClick = () => {
        AsyncStorage.setItem(KEY, '21312')
    };
    _onTakeClick = () => {
        AsyncStorage.getItem(KEY,function (err, result) {
            Alert.alert(result)
        });
    }
}