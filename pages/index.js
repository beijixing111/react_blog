// next-redux-wrapper 需要使用这个库

import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import Level from '../components/Level';
import Loading from '../components/Loading';
import { Carousel } from 'antd';

//beforeChange = {(from, to) => { //console.log(from, to);}}
// afterChange = {(current) => { //console.log(current);}}

class Page extends Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    // const level = await fetch('http://localhost:3000/api/login/1');
    // const levelData = await level.json();
    console.log(isServer, pathname, query);
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
    // const data = await res.json();
    // console.log(levelData);
    return {
      path: pathname
    }
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
    if (this.state.levelData == null) {
      return <Loading />;
    }
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
				<div className="wrapper-left wrapper-item">
				
					<div className="carousel-wrapper">
						<Carousel autoplay  
							>
							<div>
								<img src="../static/images/carousel.png" alt=""/>
								<h3>1</h3></div>
							<div>
								<img src="../static/images/carousel.png" alt="" />
								<h3>2</h3>
							</div>
							<div>
								<img src="../static/images/carousel.png" alt="" />
								<h3>3</h3>
							</div>
							<div>
								<img src="../static/images/carousel.png" alt="" />
								<h3>4</h3>
							</div>
						</Carousel>
					</div>
				</div>
				<div className="wrapper-rig wrapper-item"> </div>
				<style jsx="true"  >
					{`
						
					`}
				</style>
			</Layout>
    );
  }
}

export default Page;