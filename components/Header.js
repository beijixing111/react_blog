import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import * as Cache from '../utils/cache';

const NavMenu = [{
		'path': '/',
		'title': '首页',
	}, {
		'path': '/blog',
		'title': '博客'
	}, {
		'path': '/utilpage',
		'title': '工具库'
	}, {
		'path': '/about',
		'title': '关于'
	}, {
		'path': '/admininfo',
		'title': '管理后台'
	},
];

export default class extends Component{

	constructor(props){
		super(props);
		this.state = { };
		this.handleLoginout = this.handleLoginout.bind(this);
	}
  
	handleLoginout () {
		Cache.delCookie('token');
		Router.push({
			pathname: '/login'
		});
	}
	componentDidMount() {
		
	}
	render () {
		let level = this.props.levelData.level;
		console.log(this.props);
		return (
			<>
				<div className="header">
					<div className={this.props.isActive == '/admininfo' ? 'header-box max' : 'header-box'}>max
						<div className="logobox">
							<Link prefetch href="/">
								<a >
									<img className="logo" src='/static/images/logo.png'  />
								</a>
							</Link>
						</div>
						<div className="nav-list">
							<ul>
								{NavMenu.map((item, idx) => {
									if (item.path == "/admininfo" && level == 0) {
										return;
									}
									return (
										<li key={idx} className={this.props.isActive == item.path ? 'active' : ''}> 
											<Link prefetch href={item.path} key={idx}  >
												<a >{item.title}</a>
											</Link>
										</li>	
									);
								})}
							</ul>
						</div>
						<div className="loginout">
							<em>欢迎，{this.props.levelData.user}</em>
							<span onClick={this.handleLoginout}>退出</span>
						</div>
					</div>	
					
				</div>
				<style jsx="true">
					{`
							.header{
								height: 80px; background: #001529;position: fixed; 
								left: 0; width: 100%; z-index: 99;
							}
							.header-box{
								width: 1200px; height: 80px; margin: 0 auto;
							}
							.header-box.max{
								width: 100%;
							}
							.logobox{
								float: left; width: 50px; height: 50px; 
								padding-top: 15px; margin-right: 30px;
							}
							.logobox .logo{
								width: 50px; height: 50px; border-radius: 50%; 
							}
							.nav-list{
								height: 60px; float: left;
							}
							.nav-list ul{ list-style: none;}
							.nav-list li{ 
								line-height: 80px; text-align: center; float: left;
								cursor: pointer; font-size: 16px;  
								opacity: 1; box-sizing: border-box;  
								position: relative;
							}
							.nav-list li:after{
								display: block; content: ''; 
								position: absolute; bottom:14px; left: 50%; 
								width: 0px; height: 1px; background: rgb(96, 213, 128);
								transition:	all 0.5s ease; box-shadow: 0 0 1px #fff;
								transform: translate3d(0 0 0); 
							} 
							.nav-list li a{
								color: #fff; text-decoration: none; 
								padding: 0 20px; min-width: 100px; font-size: 18px;
								text-transform: uppercase; display: block; 
								height: 100%; position: relative; 
							}
							.nav-list li:hover:after{ 
								width: 100%; transform: translate3d(-50% 0 0);
								left: 0;
							}
							.nav-list li.active:after{ 
								width: 100%; opacity: 1; left: 0;
							}
							.loginout{
								float: right; padding: 0px 15px; height: 80px; line-height: 80px;
							}
							.loginout em{
								color: #fff; font-size: 16px; font-style: normal;
								margin-right: 10px; padding: 10px;
							}
							.loginout span{
								color: #fff; font-size: 14px; cursor: pointer;
							}
							.loginout span:hover{
								border-bottom: 1px solid #fff;
							}
						`}
				</style>
			</>
		);
	}	
}