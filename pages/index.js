// next-redux-wrapper 需要使用这个库
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import Level from '../components/Level';
import Loading from '../components/Loading';
import { Carousel, List, Avatar, Icon } from 'antd';  
const Cardtuijian = dynamic(import('../components/Cardbox.js'));

const creatlistData =  () => {
  const listDataArr = [];
  for(let i=0;i<23;i++){
    listDataArr.push({
      href: 'http://mimyz.com',
      title: `ant design part ${i}`,
      avatar: '',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles'
    });
  }
  return listDataArr;
};
const listData = creatlistData();

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}} />
    {text}
  </span>
);

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
    console.log(this.props);
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
				<div className="wrapper-left wrapper-item">
					<div className="carousel-wrapper">
						<Carousel autoplay >
							<div>
								<img style={{width: "100%"}} src="../static/images/carousel.png" alt=""/>
								<h3>1</h3></div>
							<div>
								<img style={{width: "100%"}} src="../static/images/carousel.png" alt="" />
								<h3>2</h3>
							</div>
							<div>
								<img style={{width: "100%"}} src="../static/images/carousel.png" alt="" />
								<h3>3</h3>
							</div>
							<div>
								<img style={{width: "100%"}} src="../static/images/carousel.png" alt="" />
								<h3>4</h3>
							</div>
						</Carousel>
					</div>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10,
            }}
            dataSource={listData}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
				</div>
				<div className="wrapper-rig wrapper-item">
          <Cardtuijian title="热门推荐" >
            <p>暂无内容</p>
          </Cardtuijian>

          <Cardtuijian title="热门推荐" >
            <p>暂无内容</p>
          </Cardtuijian>
          <Cardtuijian title="热门推荐" >
            <p>暂无内容</p>
          </Cardtuijian>
          <Cardtuijian title="热门推荐" >
            <p>暂无内容</p>
          </Cardtuijian>
        </div> 
			</Layout>
    );
  }
}

export default Page;