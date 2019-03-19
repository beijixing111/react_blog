
export default () => { 
  return (
    <>
      <div className="ws-loading" id="preloader">
        <div className="loading addAnimate">
          <div className="circle"></div>  
        </div>
        <div className="loading-text">正在加载···</div>
      </div>
      <style jsx global>
        {`
          .ws-loading{
            padding: 15px 0; display: flex;
            justify-content: center; align-items: center;
          }
          .loading{
            display: flex; text-align: center; margin-right: 5px;
          }
          .loading-text{
            display: flex; 
            font-size: 16px; 
            color: #6cf172;
          }
        
          .circle{
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 1px solid #6cf172;
            margin: 30px auto;
            -webkit-animation: rotation 1s ease-in-out infinite;
            -moz-animation: rotation 1s ease-in-out infinite;
            animation: rotation 1s ease-in-out infinite;
          }
          .circle:after{
            width: 6px;
            height: 6px;
            margin-left: -2px;
            margin-top: -1px;
            background: #6cf172;
            border-radius: 100%;
            position: absolute;
            content: "";
          }
          @-webkit-keyframes rotation{
            0% {-webkit-transform: rotate(0deg);}
            100% {-webkit-transform: rotate(360deg);}
          }
          @-moz-keyframes rotation{
            0% {-moz-transform: rotate(0deg);}
            100% {-moz-transform: rotate(360deg);}
          }
          @keyframes rotation{
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
          }
         
        `}
      </style>
    </>    
  );
}
