import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link , hashHistory , IndexRoute , Redirect} from 'react-router'

let AppComponent = require('../../components/mainApp.js');
let user = require('../../components/login/user.js');
let register = require('../../components/login/register.js');
let login = require('../../components/login/login.js');

module.exports = React.createClass({
  render : function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
          <Route path="user" component={user}>
            <Route path="login" component={login}></Route>
            <Route path="register" component={register}></Route>
        </Route>
        </Route>
      </Router>
    )
  }
})
