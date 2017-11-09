import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

/**
 * 图片获取
 */
export default class ImageTest extends Component {
    render() {
        return(
            <View>
                {/*本地图片*/}
                <Image source={require('./img/favicon.png')} style={{width:100,height:100}} />
                {/*网络图片，必须设置宽高*/}
                <Image source={{uri: 'http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg'}} style={{width:100,height:100}}/>
                {/*Android 中 drawable 文件夹下的图片，必须设置宽高*/}
                <Image source={{uri:'ic_launcher'}} style={{width:100,height:100}} />
                {/*Android 中 assets 文件夹下的图片，必须设置宽高*/}
                <Image source={{uri:'asset:/ic_launcher.png'}} style={{width:100,height:100}} />
            </View>
        );
    }
}