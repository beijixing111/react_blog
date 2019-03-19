import React, { Component } from 'react';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading';
import HotNav from '../components/HotNav';
import Bloglist from '../components/Bloglist';
import BlogDetail from '../components/BlogDetail';

const ListItemIndex = [{
  id: 1,
  title: '移动端选择器组件',
  desc: '原生javascript实现的常用的手机端城市地址选择三级联动，时间日期选择，普通类型选择等，见详情页。'
}, {
  id: 2,
  title: '移动端模态框组件',
  desc: '常用alert, confirm, tip等等...'
}, {
  id: 3,
  title: '登录框或广告拖拽实现',
  desc: '具体实现过程...'
}];
const ListItemHot = [{
  id: 4,
  title: '系列',
  desc: '系列，见详细。'
}]
export default class extends Component {
  static async getInitialProps(ctx) {
    console.log(ctx); 
    const dataObj = {};
    var typestr = '/';
    console.log(ctx.query); 
    if(!ctx.query.type) {
      dataObj.data = ListItemIndex; 
    }else { 
      typestr = ctx.query.type;
      if(isNaN(typestr)){
        dataObj.data = ListItemHot; 
      }else{ 
        dataObj.data = {
          title: '详情页',
          contenthtml: '<p>详情页详情页react 详情页react 详情页react 详情页react 详情页react 详情页</p>'
        };
      } 
    }
    return { path: ctx.pathname, dataObj, typestr};
  }
  constructor(props) {
    super(props);
    this.state = {
      levelData: null
    };
  }
  componentDidMount() {
    console.log(this.props);
    let levelData = Level();
    this.setState({
      levelData: levelData
    });
    
  }

  render() {
    if (this.state.levelData == null) {
      return <Loading />;
    }
    console.log(this.props);
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
        <div className="wrapper-left wrapper-item">
          {
            Array.isArray(this.props.dataObj.data) 
              ? <Bloglist datalist={this.props.dataObj.data} typestr={this.props.typestr}/> 
              : <BlogDetail dataDetail={this.props.dataObj.data} typestr={this.props.typestr} />}
        </div>
        <div className="wrapper-rig wrapper-item">
          <HotNav type={this.props.typestr} />
        </div>
        
      </Layout>
    );
  }
}