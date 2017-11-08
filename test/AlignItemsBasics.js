import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/**
 * alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
 */
export default class AlignItemsBasics extends Component {
    render() {
        return (
            // alignItems的参数flex-start、center、flex-end以及stretch
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};