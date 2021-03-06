let React = require('react');
let AV = require('leancloud-storage');
let ReactDOM = require('react-dom');

let App = require('./components/mainApp.js');
// let App = require('./components/router/leanTouter.js');
let user = require('./components/login/user.js');
let register = require('./components/login/register.js');
let login = require('./components/login/login.js');

import { Router, Route, Link , hashHistory , IndexRoute , Redirect} from 'react-router'


require("!style!css!./../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("!style!css!./../node_modules/bootstrap/dist/css/bootstrap-theme.min.css");
require("!style!css!./css/style.css");


// 应用 ID，用来识别应用
var APP_ID = 'SCl6MLrSURtoom0Va25nUXGj-gzGzoHsz';

// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
var APP_KEY = 'bewrh7HmAGYWkVYFq15bK6RG';

// 初始化
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


ReactDOM.render(<App />, document.getElementById('content'));
