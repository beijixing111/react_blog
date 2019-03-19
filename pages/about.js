import React, { Component } from 'react';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading';
import Button from 'antd/lib/button';

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
    if (this.state.levelData == null) {
      return <Loading />;
    }
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
				<div className="wrapper-box">
					<div className="wrapper-left wrapper-item">
						<p>This is a about page!</p>
					</div>
					<div className="wrapper-rig wrapper-item">
						<p>This is a about page!</p>
					</div>
					<div>
						<Button type="primary">Button</Button>
					</div>
				</div>				
			</Layout>
    );
  }
}