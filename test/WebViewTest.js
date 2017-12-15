import React, {Component} from 'react';
import {WebView,} from 'react-native';

export default class WebViewTest extends Component {
    render() {
        return (
            <WebView
                source={{
                    html: '<p><span style="color: rgb(0, 0, 0);font-family:黑体, SimHei;;font-size:16px">玩好彩有好运！</span></p><p><span style="font-family:黑体, SimHei;font-size:16px"><span style="color: rgb(0, 0, 0);">好彩彩票</span><span style="color: rgb(255, 0, 0);">苹果APP全新升级</span><span style="color: rgb(0, 0, 0);">，玩法新颖，中奖率极高!</span></span></p><p><span style="font-family: 黑体, SimHei; font-size: medium; color: rgb(0, 0, 0);">公司入款1%回馈/手机下载APP存15送30/得意彩金天天2888!</span></p><p><span style="font-family:黑体, SimHei;font-size:16px"><span style="color: rgb(0, 0, 0);">全民代理：</span><span style="color: rgb(255, 0, 0);">代理还可再开代理；实时返佣坐享其成!</span></span></p><p><span style="font-family:黑体, SimHei;font-size:16px"><span style="color: rgb(255, 0, 0); letter-spacing: 0px;">代理咨询</span><span style="color: rgb(255, 0, 0); letter-spacing: 0px;">QQ：361049126，微信：hcdl111</span></span></p><p><span style="font-size:18px;color:#ff0000"></span></p>',
                    baseUrl: ''// 中文乱码解决
                }}
                // source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
        );
    }
}