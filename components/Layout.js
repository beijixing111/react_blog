import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import HeadConf from '../components/HeadConf';
import Footer from '../components/Footer';
import { BackTop } from 'antd';  

import Dragbox from "../components/Dragbox";
import '../static/style.less';

// import * as cache from '../utils/cache';
 
const AdminLayerCont = (props) => {
	return (
		<div className="admin-container clearfix">
			<div className="admin-wrapper clearfix">
				{props.children}
			</div>
		</div>
	);
};

const NormalLayerCont = (props) => {
	return (
		<div className="container clearfix">
			<div className="container-wrapper clearfix">
				{props.children}
			</div>
		</div>
	);
};

class Layout extends Component{
	
	constructor(props) {
		super(props); 
		this.state = {
			ishide: false
		};
	}

	componentDidMount () {
		let winWid = document.body.clientWidth;
		if(winWid < 1000) {
			this.setState({
				ishide: true
			});
		}
	}

	render () { 
		return (
			<>
				<HeadConf />
				<Header {...this.props}/>
				{
					this.props.isActive == '/admininfo' ? <AdminLayerCont  {...this.props} /> : <NormalLayerCont  {...this.props} />
				}
				
				{this.props.levelData && this.props.levelData.level != 1 && !this.state.ishide ? <Footer /> : null}
				{/* 管理员登录时不出现广告 */}
				{this.props.levelData && this.props.levelData.level != 1 && !this.state.ishide ? <Dragbox /> : null}
				<BackTop>
					<div className="ant-back-top-inner back-top">
						<div className="ant-back-top-icon"></div>
					</div>
				</BackTop> 
			</>
	  );
	}
}

export default Layout;