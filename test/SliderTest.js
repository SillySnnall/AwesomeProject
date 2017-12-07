/**
 * 滑动条
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Slider,
    Text,
} from 'react-native';

export default class SliderTest extends Component {

    static navigationOptions = {
        title: 'Slider',
    };

    state = {
        value: 0,
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Slider/>
                <Slider disabled={true}/>
                <Slider maximumTrackTintColor='black'/>
                <Slider minimumTrackTintColor='red'/>
                <Slider style={{borderWidth: 1, borderColor: 'red'}}/>
                <Text>{this.state.value}</Text>
                <Slider minimumValue={5} maximumValue={20} onValueChange={(value) => {
                    this.setState({value: value})
                }} onSlidingComplete={(value) => {
                    this.setState({value: value})
                }}/>
                <Slider step={0.2}/>
                <Slider thumbImage={require('./img/favicon.png')}/>
                <Slider value={0.5}/>
            </View>
        );
    }
}