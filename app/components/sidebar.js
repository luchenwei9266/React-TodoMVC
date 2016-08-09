var React = require('react');
let user = require('./login/user.js');
import { Link } from 'react-router';

module.exports = React.createClass({
  render : function () {
    return (
      <div className="sidebar">
        <div className="sidebar-button-login">
            <button className="btn btn-success btn-lg sidebar-button"
              onClick = {this.props.showLogin}
              style = {this.props.loginBtnHideObj}>
              登录/注册
            </button>
        </div>
        <div className="sidebar-button-menu" style={this.props.loginedObj}>
          <p className = "user-title">欢迎您:</p>
          <p className = "user-name">{this.props.USERNAME}</p>
          <div onClick = {this.props.logout} className = "menu-item">退出</div>
        </div>
      </div>

    )
  }
});
