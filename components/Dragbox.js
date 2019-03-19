import React, { Component } from 'react';
import Link from 'next/link';
import Modal from '../components/Modal';

export default class extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isMove: false,
      nowX: 0,
      nowY: 0
    };
    this.handleDragMove = this.handleDragMove.bind(this);
    this.body = document.querySelector('body');
  }
  handleDragMove(e) {
    e.preventDefault();
    this.setState({
      isMove: true
    });
    this.dragMask();
    this.dragWinDown(e);
  }

  dragWinDown(e){
    e = e || window.event;
    var dragwrap = document.getElementById('dragwrap');
    var disX = e.clientX - dragwrap.offsetLeft;
    var disY = e.clientY - dragwrap.offsetTop;
    var _this = this;
    document.onmousemove = function (e) {
      e = e || window.event;
      e.preventDefault();
      _this.dragWinMove(e, disX, disY, dragwrap);
    };
    document.onmouseup = function (e) {
      e.preventDefault();
      _this.setState({
        isMove: false
      });
      _this.dragMask();
      e = e || window.event;
      _this.dragWinMove(e, disX, disY, dragwrap);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
  //拖拽移动
  dragWinMove(e, x, y, dragwrap) {
    if (!this.state.isMove) {
      return;
    }
    var winWid, winHei, maxWid, maxHei, left, top;
    winWid = document.documentElement.clientWidth || document.body.clientWidth,
    winHei = document.documentElement.clientHeight || document.body.clientHeight
    maxWid = winWid - dragwrap.offsetWidth;
    maxHei = winHei - dragwrap.offsetHeight;
    left = e.clientX - x;
    top = e.clientY - y;
    if (left <= 0) {
      left = 0;
    } else if (left >= maxWid) {
      left = maxWid;
    }
    if (top <= 0) {
      top = 0;
    } else if (top >= maxHei) {
      top = maxHei;
    }
    dragwrap.style.left = left + 'px';
    dragwrap.style.top = top + 'px';
    this.setState({
      nowX: left,
      nowY: top
    });
  }
  dragMask() {
    var hasMask = document.getElementById('dragmask');
    if (!!hasMask) {
      var isShow = this.state.isMove ? 'block' : 'none';
      hasMask.style.display = isShow;
      return;
    }
    var mask = document.createElement('div');
    mask.setAttribute('id', 'dragmask');
    mask.setAttribute('style', 'opacity: 1');
    var sty = "display:block;opacity:0;cursor:move;position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999999;";
    this.setStyle(mask, sty);
    this.body.appendChild(mask);
  }
  setStyle (dom, objStyle) {
    console.log(typeof objStyle);
    if (typeof objStyle == 'string') {
      var objStyle = objStyle.replace(/\s/g, '');
      if (!dom.getAttribute('style')) {
        dom.setAttribute('style', objStyle);
      } else {
        //将含有小短线的css属性转换为小驼峰
        objStyle = objStyle.replace(/(\-[a-z])/g, function (word) {
          return word.substring(1).toUpperCase();
        });
        var styArr = objStyle.split(';');
        for (var k = 0; k < styArr.length; k++) {
          if (styArr[k] == '') continue;
          var _strArr = styArr[k].split(':');
          dom.style[_strArr[0]] = _strArr[1];
        }
        return;
      }
    }
    for (var k in objStyle) {
      dom.style[k] = objStyle[k];
    }
  }
  
  componentDidMount() {
    var dragwrap = document.getElementById('dragwrap');
    // setInterval(() => {
    //   var x = Number(dragwrap.style.left);
    //   var y = dragwrap.style.top ?Number(dragwrap.style.top);
    // }, 1);
    
  }
  render () {
    return (
      <Modal>
        <div className="dragobj" id="dragwrap" onMouseDown={this.handleDragMove.bind(this)}>
          {/* <div className="title">标题栏拖动001</div>
          <div className="className">我是内容</div> */}
          <img src='/static/images/rabbit.gif' alt="" />
        </div>
        <style>
          {`
            .dragobj{
              width: 200px; height: 164px; background: #fff;
              position: fixed; right: 0; top: 50%; z-index: 9999;
              overflow: hidden; border-radius: 5px; cursor: move; 
              box-shadow: 0 0 15px rgba(0,0,0,0.5); 
            }
            .dragobj .title{
              height: 30px; line-height: 30px; text-align: center;
              background: #ccc;cursor: move; 
            }
            .dragobj img{
              width: 100%; 
            }
          `}
        </style>
      </Modal>
    );
  }
}