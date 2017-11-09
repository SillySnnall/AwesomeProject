import React, { Component } from 'react';
import FadeInView from "./FadeInView";
import {
    Text,
} from 'react-native';
/**
 * 淡入动画
 */
export default class FadeInViewTest extends Component {
    render() {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView>
        );
    }
}