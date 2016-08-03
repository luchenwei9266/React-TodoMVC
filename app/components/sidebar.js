var React = require('react');
let user = require('./login/user.js');
import { Link } from 'react-router';

module.exports = React.createClass({
  render : function () {
    return (
      <div className="sidebar">
        <div className="sidebar-button-login">
            <button className="btn btn-success btn-lg sidebar-button" onClick={this.props.showLogin}>登录/注册</button>
        </div>
        <div className="sidebar-button-menu">
          <div className="menu-item">我的清单</div>
          <div className="menu-item">个人设置</div>
        </div>
      </div>

    )
  }
});
