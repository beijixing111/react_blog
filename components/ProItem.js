import React, { Component } from 'react';

import { List, Card,Icon, Col, Row, Popover, Modal} from 'antd';
import * as QrCode from 'qrcode.react';

const { Meta } = Card;


export default class ProItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      nowIndex: [0,0]
    };
  } 
  
  render() {
    const {visible, nowIndex } = this.state;
    const {data} = this.props;
    return (
      <div className="project-container">
        <Modal 
            wrapClassName="modal-reset"
            width={900}
            visible={visible}
            footer={null}
            maskClosable={true}
            onCancel={()=>{this.setState({visible: false})}}
          >
          <img 
            src={data[nowIndex[0]].groupArr[nowIndex[1]].cover} 
            style={{maxWidth: 800, display: 'block', margin: '0 auto'}}
            alt=""
          />
        </Modal>
        {data.map((item, idx) => {
          return (<div key={idx} className="project-item">
            <div className="project-header">{item.title}</div>
            <Row gutter={10}> 
              {item.groupArr.map((inItem, index) =>{
                var actions = [];
                if(!!inItem.giturl && inItem.giturl !== '#'){
                  actions.push(
                    <Popover placement="top" title={inItem.giturl.indexOf('github') != -1 ? '去Github查看':'查看'} content={<a href={inItem.giturl} target="_blank" >{inItem.giturl}</a>}>
                      <a href={inItem.giturl} target="_blank" ><Icon type="link" style={{fontSize: 24}} /></a>
                    </Popover>
                  );
                }else{
                  actions.push(
                    <Icon type="lock" style={{fontSize: 24}} />
                  );
                }
                if(!!inItem.scanurl){
                  actions.push(
                    <Popover placement="top" title={<p className="zd-popover">手机扫码体验</p>} content={<QrCode value={inItem.scanurl} size={120} />}>
                      <Icon type="qrcode" style={{fontSize: 24}} />
                    </Popover>
                  );
                }
                return (
                  <Col span={8}  key={'in'+index}> 
                    <Card 
                      hoverable 
                      style={{ width: "100%"}}
                      cover={<img onClick={() => this.setState({ visible: true, nowIndex: [idx, index]})} alt="example" style={{width: 278}} src={inItem.cover} />}
                      actions={actions}
                      > 
                      <Meta
                        title={inItem.title}
                        description={inItem.desc}
                      />
                    </Card>
                  </Col> 
                ); 
              })} 
            </Row>
          </div>);  
        }) }
      </div>
    );
  }
} 