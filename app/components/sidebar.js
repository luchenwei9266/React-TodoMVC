var React = require('react');

module.exports = React.createClass({
  render : function () {
    return (
      <div className="sidebar">
        <div className="sidebar-button-login">
          <button className="btn btn-success btn-lg sidebar-button">登录/注册</button>
        </div>
        <div className="sidebar-button-menu">
          <div className="menu-item">我的清单</div>
          <div className="menu-item">将任务发送到邮箱</div>
        </div>
      </div>

    )
  }
});
