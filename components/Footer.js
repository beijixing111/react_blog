export default () => {
	return ( 
    <>
		  <div className="footer">
        <p>个人站点：React(Next.js SSR)+Express+Mysql+ES6</p>
        <p>2018-09-12 建<span>❤️</span><span>❤️</span><span>❤️</span></p>
        <div></div>
      </div> 
      <style jsx = "true" > 
        {`
          .footer{
            padding: 15px 0; background: #83c2a8; clear: both;
          }
          .footer p{
            text-align: center; color: #fff; padding: 5px 0; color: #fff;
            opacity: 085;
          }
          .footer p span{
            color: #d971d0; margin: 0 2px;
          }
        `}
      </style> 
    </>
	);
}