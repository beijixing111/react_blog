const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const next = require('next');
const cookieParser = require('cookie-parser') //引入中间件
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = dev ? 3002 : 80;

const isAuth = (req, res) => {
  if (!req.cookies && !req.cookies.token) {
    return res.redirect('/login');
  }
}

app.prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser()); //使用cookie
    server.use(bodyParser.json()); // for parsing application/json
    // server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    // server.use(multer());

    if (!dev) {
      server.use(compression()) //gzip
    }

    server.post('/api/login', (req, res) => {
      let resss = {};
      // console.log(req.body);
      if (req.body.username == 'test') {
        resss = {
          'level': 0,
          'user': 'Normal'
        }
      } else if (req.body.username == 'admin') {
        resss = {
          'level': 1,
          'user': 'Admin'
        }
      } else {
        resss = {
          'level': -1,
          'user': '无权限'
        }
      }
      res.set({
        'Content-Type': 'application/json;charset=UTF-8'
      });
      return res.json(resss);
    });
    server.get('/', (req, res) => {
      // console.log(req.query);
      // console.log(req.cookies.token);
      isAuth(req, res);
      const actualPage = '/index.js';
      return handle(req, res, actualPage);
    });
    server.get('/login', (req, res) => {
      const actualPage = '/login';
      return handle(req, res, actualPage);
    });

    server.get('/about', (req, res) => {
      isAuth(req, res);
      const actualPage = '/about';
      return handle(req, res, actualPage);
    });
    server.get('/blog/:id', (req, res) => {
      // console.log(req.params);
      isAuth(req, res);
      const actualPage = '/blog';
      const queryParams = {
        id: req.params.id
      };
      app.render(req, res, actualPage, queryParams);
    });
    // server.get('/t/:id', (req, res) => {
    // 	// console.log(req.params);
    // 	// console.log(!req.query.token);
    // 	isAuth(req, res);
    // 	const actualPage = '/subblog';
    // 	const queryParams = {
    // 		id: req.params.id
    // 	};
    // 	app.render(req, res, actualPage, queryParams);
    // });
    server.get('/utilpage', (req, res) => {
      // console.log(!req.query.token);
      isAuth(req, res);
      const actualPage = '/blog';
      return handle(req, res, actualPage);
    });
    server.get('/admininfo/:id', (req, res) => {
      // console.log(req.params);
      isAuth(req, res);
      // return handle(req, res);
      const admininfo = '/admininfo';
      const queryParams = {
        id: req.params.id
      };
      app.render(req, res, admininfo, queryParams);
    });
    server.get('/p/:id', (req, res) => {
      // console.log(req.params);
      // console.log(!req.query.token);
      isAuth(req, res);
      const actualPage = '/post';
      const queryParams = {
        id: req.params.id
      };
      app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:' + port)
    })
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });