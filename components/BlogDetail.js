import React, { Component } from 'react';
import Link from 'next/link';


export default class extends Component {
  
  render () {
    const contenthtml = this.props.dataDetail.contenthtml;
    return <>
      <div className="wrapper">
        <h3 className="title">{this.props.dataDetail.title}</h3>
        <div className="blog-detail" dangerouslySetInnerHTML={{ __html: contenthtml }} ></div>
      </div>
      <style jsx="true">
        {`
          .wrapper{
            padding: 10px 15px;
          }
          .title{
            font-size: 18px; color: #333; padding: 10px 0px;
            border-bottom: 1px solid #d2d2d2;
          }
          .blog-detail{
            padding: 10px 0px; text-indent: 1em;
          }  
        `}
      </style>
    </>
  }
}


