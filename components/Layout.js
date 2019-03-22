import React, { Component } from 'react';
import Header from './Header';
import HeadConf from '../components/HeadConf';
import Footer from '../components/Footer';
import Dragbox from '../components/Dragbox';
import '../static/style.scss';

// import * as cache from '../utils/cache';

const layoutStyle = {
	// border: '1px solid #ddd'
};

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
				<style jsx="true" global >
					{`
						.clearfix:after{content:""; display:block; visibility:hidden; height:0; clear:both;}
						.clearfix{zoom:1;}
						.container{
							width: 100%; clear: both; padding: 110px 0;
						}
						.container-wrapper{
							width: 1200px; margin: 0 auto; background: #fff; 
							border-radius: 3px; box-shadow: 0 0 5px #ccc;
							padding: 10px 0;
						}
						.admin-container{
							padding: 80px 0;
						}
						.admin-container .admin-wrapper{
							padding-left: 180px; width: 100%;
						}
					`}
				</style>
			</>
	  );
	}
}

export default Layout;