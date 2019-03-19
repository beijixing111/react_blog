import React from 'react';
import Link from 'next/link';

const Error404 = () => (
  <div className="error404">
    <div className="err-link">
      <Link href="/">
        <a >返回首页</a>
      </Link>
      <a href="javascript:history.go(-1);">返回上一页</a>
    </div>
  </div>
);

// const Error500 = () => ( );

export default class Error extends React.Component {
  static getInitialProps ({ res, err}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render () {
    return (
      <>
        <div>
          {this.props.statusCode != 404
            ? `An error ${this.props.statusCode} occurred on server`
            : <Error404 />}
        </div>
        <style jsx="true">
          {`
            .error404{
              position: fixed; left: 0; top: 0; bottom: 0; right: 0;
              background: url(../static/images/error404.jpg) no-repeat;
              background-size: 100% 100%;
            }
            .err-link{
              position: absolute; left: 50%; top: 70%; width: 400px;
              text-align: center; height: 50px; margin-left: -200px;
            }
            a{
              text-decoration: none; padding: 10px 20px; border-radius: 5px;
              background: #e8324a; color: #fff; margin: 0 15px;
            }
          `}
        </style>      
      </>
    );
  }
}