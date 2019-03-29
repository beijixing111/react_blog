const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const koaBody = require('koa-body');
const Cookies = require('cookies');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3002;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();

const service = require('./server/AppService');

//（可选）定义用于对cookie值进行签名的密钥
//以防止客户端篡改
var keys = ['keyboard car'];

app.prepare()
  .then(() => {
		const server = new Koa();
    const router = new Router();
   //  if(!dev){
			// server.use(compression()) //gzip
   //  }
    server.use(koaBody({
		  multipart: true,
		  formidable: {
		    maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认200M
		  }
		}));
		 
		router.post('/api/login', async (ctx) => { 
      // console.log(ctx.request.body);
      let username = ctx.request.body.username;
      let password = ctx.request.body.password;
      var cookies =  new Cookies(ctx.req, ctx.res, {keys: keys});
  	 //获取cookie 
	  	var lastVisit =  cookies.get('LastVisit', {signed: true });
	  	if(!lastVisit){
	  		console.log('Welcome, first time visitor!');
	  	}else{
	  		console.log('Welcome back! Nothing much changed since your last visit at ' + lastVisit + '.');		
	  	}
      let sql = 'SELECT * FROM user_p WHERE name = ? AND password = ?';
      let modSqlParams = [username, password];
      console.log(modSqlParams);
      let rows = await service.query(sql, modSqlParams);
      console.log(rows);
      let res = rows['0'];
      let resss = {};
      if (!res) {
        resss = {
          'level': -1,
          'msg': '无权限'
        };
      } else {
        if(res.name == 'admin'){
          resss = {
            'level': 1,
            'user': res.name
          }; 
        }else{
          resss = {
            'level': 0,
            'user': res.name
          };
        }
      } 
      ctx.res.writeHead(200, {
		    "Content-type": 'application/json;charset=UTF-8'
		  });
      ctx.body = resss;
    });

		router.get('/a/:id', async ctx => {
      await app.render(ctx.req, ctx.res, '/a', ctx.query);
      ctx.respond = false
    });

		router.get('/', async (ctx) => { 
      await app.render(ctx.req, ctx.res, '/index', ctx.query);
      ctx.respond = false
    });
		
		router.get('/login', async (ctx) => {
      await app.render(ctx.req, ctx.res, '/login', ctx.query);
      ctx.respond = false
    });

    router.get('/about', async (ctx) => {
      await app.render(ctx.req, ctx.res, '/about', ctx.query);
      ctx.respond = false
    });

    router.get('/fuli', async (ctx) => {
      await app.render(ctx.req, ctx.res, '/fuli', ctx.query);
      ctx.respond = false
    });

    router.get('/blog/:id', async (ctx) => {

      await app.render(ctx.req, ctx.res, '/blog', ctx.query);
      ctx.respond = false
    });

    router.get('/utilpage', async (ctx) => {

      await app.render(ctx.req, ctx.res, '/utilpage', ctx.query);
      ctx.respond = false
    });

    router.get('/admininfo/:id', async (ctx) => {

      await app.render(ctx.req, ctx.res, '/admininfo', ctx.query);
      ctx.respond = false
    });

  	router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })
  	server.use(router.routes())

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  });