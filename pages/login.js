import Router from 'next/router';
import React, { Component, Fragment } from 'react';
import HeadConf from '../components/HeadConf';
import Axios from 'axios';
import * as Cache from '../utils/cache';
import '../static/style.less';

const WithoutAuth = (props) => {
  return (
    <div>
      <p>{props.msg}</p>
      <style jsx="true">
        {`
          p{
            text-align: center;
            color: red;
            margin-bottom: 0;
          }
        `}
      </style>  
    </div>
  );
}

const sty = {
  loginbody: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "url(../static/images/20180905111026.png) no-repeat",
    backgroundSize: "cover",
  },
  loginbox: {
    width: "400px",
    height: "400px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-200px",
    marginLeft: "-200px",
    overflow: "hidden",
    boxShadow: "0 0 20px #fff"
  },
  title: {
    padding: "15px 15px",
    fontSize: "24px",
    color: "#fff",
    background: "rgb(77, 160, 237)"
  },
  wrap: {
    padding: '30px 0'
  },
  label: {
    margin: "0 auto 30px",
    width: "80%",
    overflow: 'hidden',
    position: 'relative'
  },
  ipt: {
    display: "block",
    outlien: "none",
    width: "100%",
    padding: "15px 10px",
    border: "1px solid rgba(24, 144, 255, 0.87) ",
    fontSize: "16px",
    borderRadius: "5px",
    boxShadow: "inset 0 0 5px rgba(24, 144, 255, 0.87)",
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  sub: {
    display: "block",
    width: "100%",
    marginTop: "10px",
    padding: "15px 10px",
    border: "none",
    outline: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    boxSizing: "border-box",
    overflow: "hidden"
  }
}

const ClearInput = (props) => (
  <Fragment>
    <span className="clear" onClick={props.clearText}>×</span> 
    <style jsx = "true" > 
      {`
        .clear{
          position: absolute; display: block; 
          top: 0px; right: 0px; z-index: 99;
          font-size: 22px; color: #999;
          padding: 8px 10px;
        }
      `} 
    </style>
  </Fragment>
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sysname: '博客系统',
      username: '',
      password: '',
      loginMsg: '',
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit() {
    localStorage.setItem('token', '123');
    let url = "/api/login";
    let username = this.state.username;
    let password = this.state.password;
    // if (username == '' || username == null) {
    //   return this.setState({ loginMsg: '* 用户名不能为空！*' });
    // } else {
    //   this.setState({ loginMsg: '' });
    // }
    // if (password == '' || password == null) {
    //   return this.setState({ loginMsg: '* 密码不能为空！*' });
    // } else {
    //   this.setState({ loginMsg: '' });
    // }
    // var resss = {};
    // if(username == 'admin'){
    //   resss = {
    //     'level': 1,
    //     'user': 'Admin'
    //   }
    // }else if( username == 'test'){
    //   resss = {
    //     'level': 0,
    //     'user': 'Normal'
    //   }
    // }else{
    //   return resss = {
    //     'level': -1,
    //     'user': '无权限'
    //   };
    // }
    // let tokenStr = JSON.stringify(resss);
    // Cache.setCookie('token', tokenStr);
    // Router.push({
    //   pathname: '/',
    // });
    Axios.post(url, {
        username: username,
        password: password
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.level == -1) {
          this.setState({ loginMsg: '*抱歉，你没有登录权限！*' });
          return;
        }
        let tokenStr = JSON.stringify(res.data);
        Cache.setCookie('token', tokenStr);
        Router.push({
          pathname: '/',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div style={sty.loginbody}>
        <HeadConf />
        <div style={sty.loginbox}>
          <div style={sty.title}>{this.state.sysname}</div>
          <div style={sty.wrap}>
            <div style={sty.label}>
              <input style={sty.ipt} type="text" value={this.state.username} name="username" placeholder="请输入用户名" onChange={this.handleUsername} />
              {this.state.username != '' ? <ClearInput clearText={() => this.setState({username: ''})} /> : ''}
            </div>
            <div style={sty.label}>
              <input style={sty.ipt} type="password" value={this.state.password} name="password" placeholder="请输入密码" onChange={this.handlePassword} />
              {this.state.password != '' ? <ClearInput clearText={() => this.setState({ password: '' })} /> : ''}
            </div>
            <div style={sty.label}>
              <button style={sty.sub} type="button" onClick={this.handleSubmit}>提&nbsp;&nbsp;交</button>
            </div>
            {this.state.loginMsg != '' ? <WithoutAuth msg={this.state.loginMsg} /> : ''}
            
          </div>
        </div>
        <style jsx="true">
          {`
           input:focus{
             box-shadow: inset 0 0 5px pink !important;
             border: 1px solid pink !important;
             outline: none !important;
           }
            button{
              background: rgb(77, 160, 237);
            }
            button:hover{
              background: rgb(42, 145, 239);
            }
            
          `}
        </style>
      </div>
    );
  }
}