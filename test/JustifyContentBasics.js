import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/**
 * justifyContent可以决定其子元素沿着主轴的排列方式
 */
export default class JustifyContentBasics extends Component {
    render() {
        return (
            // justifyContent的参数 flex-start、center、flex-end、space-around以及space-between
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
