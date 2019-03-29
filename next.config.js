
// const withCss = require('@zeit/next-css');

// // fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = file => {}
// }

// const conf = { 
// 	distDir: 'build',
// 	generateEtags: false,
// 	generateBuildId: async () => {
// 		return 'build-' + Date.now();
// 	}
// };	
// module.exports = withCss(conf);


// less配置
const withCss = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/modifyVars.less'), 'utf8')
)

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

const conf = { 
	lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
	distDir: 'build',
	generateEtags: false,
	generateBuildId: async () => {
		return 'build-' + Date.now();
	}
};	
module.exports = withCss(conf);




// const conf = {
// 	cssModules: true, 
// 	cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
// 	distDir: 'build',
// 	generateEtags: false,
// 	generateBuildId: async () => {
// 		return 'build-' + Date.now();
// 	},
// 	webpack: (config) => {
//     if (ANALYZE) {
//     	console.log(1233);
//       config.plugins.push(
//       	new BundleAnalyzerPlugin({
// 	        analyzerMode: 'server',
// 	        analyzerHost: '127.0.0.1',
// 	        analyzerPort: 7777, 
// 	        openAnalyzer: true
// 	      })
//       )
//     } 

//     return config;
//   }
// };
// module.exports = withSass();

// /* Without CSS Modules, with PostCSS */
// module.exports = antdLessLoader({
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]___[hash:base64:5]",
//     },
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//       modifyVars: modifyVars
//     }
// })





// module.exports = withLess(conf);

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