import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/**
 * Flex Direction(横、纵)权重
 */
export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // row横向，column纵向
            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};