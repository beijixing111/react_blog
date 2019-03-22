
import React, { Component } from 'react';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading';

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
    // if (this.state.levelData == null) {
    //   return <Loading />;
    // }
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
        <div className="wrapper-left wrapper-item">
          <div className="mobile-test">
            <div className="title">表单手机号验证</div>
            <pre>
              {`
function(tel) {
  var reg = /^1\d{10}$/;
  return reg.test(tel);
}
              `}
            </pre>
          </div>
        </div>
        <div className="wrapper-rig wrapper-item">
          <p>This is a util page!</p>
        </div>
        <style jsx="true">
          {`
            .mobile-test{
               min-width: 600px; padding: 0 15px;
              display: inline-block; 
            }
            .mobile-test .title{
              padding: 10px 0; font-size: 20px; color: #333;
            }
            .mobile-test pre{
              color: #60d580; line-height: 1.5; border-radius: 5px;
              background: #333;  padding: 15px;
            }
          `}
        </style>
      </Layout>
    );
  }
}


