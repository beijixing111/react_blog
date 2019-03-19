import moment from 'moment';
import 'moment/locale/zh-cn';
import React,{ Component } from 'react';
import Loading from '../Loading';
import { Upload, Icon, message, Input, DatePicker, Button}  from 'antd';

moment.locale('zh-cn');

const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if(!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024/1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}


export default class  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dateVal: 'default',
      msgText: ''
    }; 
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if(info.file.state === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>this.setState({
        imageUrl,
        loading: false
      }));
    }
  }

  handleSizeChange = (date, d) => {
    // console.log(d);
    this.setState({ dateVal: d});
  }

  handleTextAreaChange = (e) => {
    this.setState({ msgText: e.target.value });
  }
  handleSubClick = (e) => {
    console.log(this.state);
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    ); 
    const imageUrl = this.state.imageUrl;
    return (
      <>
        <div className="info-box">
          <h3>个人资料</h3>
          <div className="headimg-box">
            <div className="lab-text">个人头像：</div>
            <div className="rig-cont">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
            </div>
          </div>
          <div className="date-box">
            <div className="lab-text">日期：</div>
            <div className="date-input">
              <DatePicker  onChange={this.handleSizeChange} />
            </div>
          </div>
          <div className="msg-box">
            <div className="lab-text">留言：</div>
            <div className="textarea-box">
              <TextArea rows={4} style={{ maxWidth: '600px' }} onChange={this.handleTextAreaChange} value={this.state.msgText} />
            </div>
          </div>
          <div className="lastbtn">
            <Button type="primary" style={{width: "100px"}} onClick={this.handleSubClick}>提&nbsp;&nbsp;交</Button>
          </div>
        </div>
        <style jsx="true">
          {`
            .info-box{
              width: 1000px; margin: 20px; border: 1px solid #d2d2d2; border-radius: 5px;
              padding: 20px;
            }
            h3{ margin-bottom: 15px;}
            .headimg-box{
              height: 110px; margin-bottom: 10px;  
            }
            .lab-text{
              float: left; width: 80px; text-align: left; clear: both;
            }
            .date-box{
              height: 50px;
            }
            .headimg-box .lab-text{
              height: 110px;
            }
            
            .date-input{
              float: left;
            }
            .lastbtn{
              padding: 15px 80px;  
            } 
          `}
        </style>
      </>
    )
  }
}
