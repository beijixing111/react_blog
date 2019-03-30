import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading';  
const Cardtuijian = dynamic(import('../components/Cardbox.js'));

import ProItem from '../components/ProItem';

const fulidata = [{
  title: '养眼少女',
  groupArr: [{
    title: '美少女',
    desc: '美少女',
    cover: '/static/uploadimgs/69e42777c5.jpg',
    giturl: '',
    scanurl: ''
  },{
    title: '美少女',
    desc: '美少女',
    cover: '/static/uploadimgs/e4dc3e9f0a.jpg',
    giturl: '',
    scanurl: ''
  },{
    title: '美少女',
    desc: '美少女',
    cover: '/static/uploadimgs/89e9947b8f.jpg',
    giturl: '',
    scanurl: ''
  },{
    title: '美少女',
    desc: '美少女',
    cover: '/static/uploadimgs/2b4a8cf902.jpg',
    giturl: '',
    scanurl: ''
  },{
    title: '美少女',
    desc: '美少女',
    cover: '/static/uploadimgs/b353e0f0f6.jpg',
    giturl: '',
    scanurl: ''
  },{
    title: '美少女',
    desc: '美少女',
    cover: '/static/uploadimgs/6c92a10b63.jpg',
    giturl: '',
    scanurl: ''
  }]
}];  


export default class extends Component {
  static async getInitialProps(ctx) {
    console.log(ctx);
    return {
      path: ctx.pathname
    };
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
				<div className="wrapper-box">
					<div className="wrapper-left wrapper-item">
						<div className="">
              <ProItem data={fulidata} /> 
            </div>
					</div>
					<div className="wrapper-rig wrapper-item">
						<Cardtuijian title="推荐">小福利啦啦啦</Cardtuijian>
					</div>  
				</div>				
			</Layout>
    );
  }
}