import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';

let ITEM_HEIGHT = 100;// 条目高度

export default class FlatListTest extends Component {

    _flatList;

    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = item.index % 2 === 0 ? 'red' : 'blue';
        return <Text style={[{flex: 1, height: ITEM_HEIGHT, backgroundColor: bgColor}, styles.txt]}
                     onPress={() => this._onClick(item)}>{txt}</Text>
    };

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    };

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    };
    // 分割线
    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
    };
    //点击事件
    _onClick = (item) => {
        alert(item.index)
    };

    render() {
        // 数据
        let data = [];
        for (let i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex: 1}}>
                <Button title='滚动到指定位置' onPress={() => {
                    //this._flatList.scrollToEnd();
                    //this._flatList.scrollToIndex({viewPosition:0,index:8});
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/>
                <View style={{flex: 1}}>
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        data={data}
                        //numColumns ={3}
                        //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        //getItemLayout={(data,index)=>(
                        //{length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
                        //)}

                        //onEndReachedThreshold={5}
                        //onEndReached={(info)=>{
                        //console.warn(info.distanceFromEnd);
                        //}}

                        //onViewableItemsChanged={(info)=>{
                        //console.warn(info);
                        //}}
                    >
                    </FlatList>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});