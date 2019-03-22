import React, { Component } from 'react';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading';
import Button from 'antd/lib/button';
import Cardziliao from '../components/Cardbox.js';

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
    // if (this.state.levelData == null) {
    //   return <Loading />;
    // }
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
				<div className="wrapper-box">
					<div className="wrapper-left wrapper-item">
						<p>This is a about page!</p>
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
                签名：<span>前端小白前端小白前端小白前端小白前端小白</span>
              </div>
              <div className="info-text">
                擅长领域：<span> web前端，react，css3，node.js，koa，
                nginx，Scss，less</span>
              </div> 
              <div className="info-link">
                简书：<a href="https://www.jianshu.com/u/c7583a5ab917" target="_blank">https://www.jianshu.com/u/c7583a5ab917</a>
              </div>
              <div className="info-link">
                github：<a href="https://github.com/beijixing111" target="_blank">https://github.com/beijixing111</a>
              </div>
            </Cardziliao>
					</div> 
          <style jsx="true">
            {`
              .headimg{
                width: 100%; padding: 10px 0; 
                display: flex; justify-content: flex-start;
                align-items: center; 
              }
              .headimg img{
                width: 80px; height: 80px; border-radius: 50%;
                box-shadow: 0 0 10px 1px rgba(0, 0 , 0, .3);
              }
              .headimg .info{
                margin-left: 15px;
              }
              .headimg .info p{
                margin-bottom: 0; padding: 10px 0;font-size: 14px;
              }
              .headimg .info p span{
                font-weight: bold; font-size: 14px;
              }
              .info-text{
                padding: 10px 0; font-size: 14px;
              }
              .info-text span{
                font-weight: bold; font-size: 14px;
              }
              .info-link{
                white-space: nowrap; overflow: hidden;
                text-overflow: ellipsis;
              }
              .info-link a{
                font-size: 14px; 
              }
            `}
          </style>
				</div>				
			</Layout>
    );
  }
}