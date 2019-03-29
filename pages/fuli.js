import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Level from '../components/Level';
import Loading from '../components/Loading'; 
import { Card, Col, Row } from 'antd';
const Cardtuijian = dynamic(import('../components/Cardbox.js'));

const { Meta } = Card;

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
						<div className="">
              <Row gutter={10}>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/69e42777c5.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/89e9947b8f.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/e4dc3e9f0a.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/89e9947b8f.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/e4dc3e9f0a.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/e4dc3e9f0a.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card 
                    hoverable
                    style={{ width: "100%"}}
                    cover={<img alt="example" style={{width: 278}} src="/static/uploadimgs/89e9947b8f.jpg" />}
                    >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
					</div>
					<div className="wrapper-rig wrapper-item">
						<Cardtuijian title="推荐">小福利啦啦啦</Cardtuijian>

					</div>  
				</div>				
			</Layout>
    );
  }
}