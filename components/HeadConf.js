import Head from 'next/head';

// var LinkStyle = () => {
//   return '<link rel="stylesheet" href="/_next/static/' + css +'" />';
// }

export default () => (
  <Head>
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1.0" />
  	<meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection"content="telephone=no, email=no" />   
    <meta name="screen-orientation" content="portrait" /> 
    <meta name="x5-orientation" content="portrait" /> 
    <meta name="full-screen" content="yes" /> 
    <meta name="x5-fullscreen" content="true" /> 
    <meta name="browsermode" content="application" /> 
    <meta name="x5-page-mode" content="app" /> 
    <meta name="msapplication-tap-highlight" content="no" /> 
    <link rel="stylesheet" href="../static/css/scrollbar.css" />
    <title>北极星</title>
  </Head>
)
