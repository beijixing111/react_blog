import React, { Component } from 'react';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading'; 
import Cardziliao from '../components/Cardbox.js';
import ProItem from '../components/ProItem.js';
import Heart from '../components/Heart';

var ReactProData = [{
  title: 'React项目',
  groupArr: [{
    title: '仿京东手机端商城',
    desc: 'react技术栈+antd-mobile,随意手机号，密码不小于6位数，登录可查看购物车功能！',
    cover: '/static/images/jidong.jpg',
    giturl: 'https://github.com/beijixing111/jdapp',
    scanurl: 'https://www.mimyz.com'
  },{
    title: 'react_blog博客---本博客',
    desc: 'next.js 服务端渲染，搭配koa2自定义服务器路由！ 博客接口数据陆续开发中……',
    cover: '/static/images/blog_01.png',
    giturl: 'https://github.com/beijixing111/react_blog',
    scanurl: 'http://blog.mimyz.com/about'
  },{
    title: 'react+redux简书项目',
    desc: '实现简书首页，登录页，列表页，详情页等功能模块。',
    cover: '/static/images/jianshu.png',
    giturl: 'https://github.com/beijixing111/react_blog',
    scanurl: ''
  }, {
    title: 'react图片画廊',
    desc: 'react图片画廊',
    cover: '/static/images/gallery.png',
    giturl: 'https://github.com/beijixing111/Gallery-by-react',
    scanurl: ''
  }]
},{
  title: '百淘公司项目',
  groupArr: [{
    title: '看了么商城',
    desc: '看了么购物商城，卖家，买家购物消费平台，(扫码是手机站，Link链接是PC)',
    cover: '/static/images/kanleme.jpg',
    giturl: 'https://yzsh58.com/',
    scanurl: 'https://mobile.yzsh58.com/'
  }, {
    title: '小智定位管理系统',
    desc: 'koa2 + ejs实现前端页面快速开发，中小学学生信息定位管理系统，配合APP端管理学生位置信息，考勤信息等(更多信息不方便透露)……',
    cover: '/static/images/xiaozhi_01.jpg',
    giturl: '#',
    scanurl: ''
  }]
}, {
  title: '小程序项目',
  groupArr: [{
    title: '呆呆酱',
    desc: '小程序个人版(未上线)，首页（视频、段子，文字，图片），视频为B站接口视频，音乐为部分QQ音乐接口，我的（登录加扫一扫等功能）',
    cover: '/static/images/small_01.png',
    giturl: '#',
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
						<ProItem data={ReactProData} />
					</div>
					<div className="wrapper-rig wrapper-item">
						<Cardziliao  title="个人资料" >
              <div className="headimg">
                <img src="../static/images/headimg.jpg" alt=""/>
                <div className="info">
                  <p className="nickname">昵称：<span>北极星</span></p>
                  <p className="sex">性别： <span>男</span></p>
                </div>
              </div>
              <div className="info-text">
                签名：<span><Heart color="#d971d0">❤️</Heart>前小白的小白博客<Heart color="#d971d0">❤️</Heart>。</span>
              </div>
              <div className="info-text">
                擅长领域：<span> Web前端，Jquery, React技术栈，小程序，Css3，
                Scss，Less</span>
              </div> 
              <div className="info-text">
                熟悉领域：<span> Node.js，Koa2，Nginx，Linux，MySql</span>
              </div> 
              <div className="info-link">
                简书：<a href="https://www.jianshu.com/u/c7583a5ab917" target="_blank">https://www.jianshu.com/u/c7583a5ab917</a>
              </div>
              <div className="info-link">
                Github：<a href="https://github.com/beijixing111" target="_blank">https://github.com/beijixing111</a>
              </div>
            </Cardziliao>

					</div>  
				</div>				
			</Layout>
    );
  }
}