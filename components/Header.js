import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import * as Cache from '../utils/cache'; 

const NavMenu = [{
		'path': '/index',
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
		'path': '/fuli',
		'title': '小福利'
	}, {
		'path': '/admininfo',
		'title': '管理后台'
	},
];

export default class extends Component{

	constructor(props){
		super(props);
		this.state = { 
			islogin: false,
			ismobile: false
		};
		this.handleLoginout = this.handleLoginout.bind(this);
	}
  
	handleLoginout () {
		Cache.delCookie('token');
		Router.push({
			pathname: '/'
		});
		setTimeout(()=>{
			location.reload()
		},300);
	}
	componentDidMount() {
		 
	}
	render () {
		let level = -1;
		if(this.props.levelData){
			level = this.props.levelData.level;
		}
		console.log(this.props);
		return (
			<>
				<div className="header">
					<div className={this.props.isActive == '/admininfo' ? 'header-box max' : 'header-box'}>
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
									if (item.path == "/admininfo" && level != 1) {
										return;
									}
									return (
										<li key={idx} className={this.props.isActive == item.path ? 'active' : ''}> 
											<Link href={item.path} key={idx}  >
												<a >{item.title}</a>
											</Link>
										</li>	
									);
								})}
							</ul>
						</div>
						<div className="loginout">
							{ level < 0 ?
								<Link href="/login" ><a className="signin">登录</a></Link> :
								<div>
									<em>欢迎，{this.props.levelData.user}</em>
									<span onClick={this.handleLoginout}>退出</span>
								</div>
							}
						</div>
					</div>	
					
				</div> 
			</>
		);
	}	
}