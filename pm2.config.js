module.exports = {
  apps: [{
    name: 'myblog',
    script: './myblog.js',
    cwd: './', // 当前工作路径
    watch: [
      '.next' // 监控变化的目录，一旦变化，自动重启
    ],
    ignore_watch: [
      // 从监控目录中排除
      'node_modules',
      'logs',
      'static'
    ],
    instances: 2, // 启动2个实例
    node_args: '--harmony',
    env: {
      NODE_ENV: 'production',
      PORT: 3002
    }
  }]
};