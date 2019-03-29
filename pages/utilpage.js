
import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading'; 

import ProItem from '../components/ProItem';

const Cardtuijian = dynamic(import('../components/Cardbox.js'));

var utilData = [{
  title: 'JS插件',
  groupArr: [{
    title: 'js手机端仿IOS数字键盘',
    desc: '金额数字、号码键盘！',
    cover: '/static/images/num_keyboard.png',
    giturl: 'https://github.com/beijixing111/number-keyboard',
    scanurl: 'https://beijixing111.github.io/number-keyboard/keyboard.html'
  },{
    title: 'Jquery移动端Modal插件',
    desc: '包含常用的toast，loading，alert，confirm，popup等等。',
    cover: '/static/images/diag.jpg',
    giturl: 'https://github.com/beijixing111/dialogdemo',
    scanurl: 'http://mimyz.com/'
  }, {
    title: 'js移动端picker选取器',
    desc: '三级联动，时间，日期等选取。',
    cover: '/static/images/picker.png',
    giturl: 'https://github.com/beijixing111/pickSelect',
    scanurl: ''
  }]
}];

export default class extends Component {
  static async getInitialProps(ctx) {
    console.log(ctx);
    return { path: ctx.pathname };
  }
  constructor(props) {
    super(props);
    this.state = {
      levelData: null
    };
  }
  componentDidMount() {
    let levelData = Level();
    this.setState({
      levelData: levelData
    });
  }

  render() { 
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
        <div className="wrapper-left wrapper-item">
          <ProItem data={utilData} />
        </div>  
        <div className="wrapper-rig wrapper-item">
          <Cardtuijian title="热门工具">工具</Cardtuijian>
        </div>
        
      </Layout>
    );
  }
}


