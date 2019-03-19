import React, { Component } from 'react';
import Link from 'next/link';


export default class extends Component {
  
  render () {
    var typeText = this.props.typestr;
    typeText = typeText == "/" ? '' : typeText.substring(0, 1).toUpperCase() + typeText.substring(1);
    return <>
      {
        this.props.datalist.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="title">
                <Link as={`/blog/${item.id}`} href={`/blog?type=${item.id}`}>
                  <a><i>{typeText}</i>{item.title}</a>
                </Link>
              </div>
              <div className="desc-text">{item.desc}</div>
              <div className="bottom-info">
                <div className="time">2018-10-10</div>
              </div>
            </div>
          );
        })
      }
      <style jsx="true">
        {`
            .list-item{
              padding: 10px 15px; border-bottom: 1px solid #d2d2d2;
              height: 100px; overflow: hidden; position: relative;
            }
            .list-item .title{ 
              margin-bottom: 10px;
            }
            .list-item .title a{
              font-size: 18px; color: #333; text-decoration: none;
            } 
            .list-item .title i{
              font-style: normal; 
            }
            .list-item .title a:hover{ 
              color: #017e66; 
             }
            .list-item .desc-text{
              font-size: 14px; color: #999;
            }
            .list-item .bottom-info{
              position: absolute; bottom: 5px; width: 100%; left: 15px;
            }
            .list-item .bottom-info .time{
              float: left; color: #666; font-size: 12px;
            }
        `}
      </style>
    </>
  }
}


