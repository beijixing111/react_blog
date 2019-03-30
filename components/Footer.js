import React, { Component } from 'react';
import Heart from '../components/Heart';

export default () => {
	return ( 
    <>
		  <div className="footer">
        <p>个人站点：React(Next.js SSR)+Koa2+Mysql+ES6</p>
        <p>{[1,2,3].map((v)=>(<Heart key={v} color="#d971d0">❤️</Heart>))}</p>
        <div></div>
      </div> 
      <style jsx = "true" > 
        {`
          .footer{
            padding: 15px 0; background: #83c2a8; clear: both;
          }
          .footer p{
            text-align: center; color: #fff; padding: 5px 0; color: #fff;
            font-size: 16px;
          } 
        `}
      </style> 
    </>
	);
}