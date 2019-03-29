const withSass = require('@zeit/next-sass');
module.exports = withSass();

// module.exports = {
//   serverRuntimeConfig: {
//     // 仅在服务器端可用
//     mySecret: 'secret',
//     secondSecret: process.ENV.SECOND_SECRET //通过ENV变量
//   },
//   publicRuntimeConfig: {
//     //将在服务器和客户端上提供 
//     staticFolder: '/static'
//   }
// }