let React = require('react');

module.exports = React.createClass({
  render: function (){
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="loginInputEmail" className="col-sm-2 control-label">账号</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="loginInputEmail" placeholder="请输入您的用户名"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="loginInputPassword" className="col-sm-2 control-label">密码</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="loginInputPassword" placeholder="请输入您的用户名密码"/>
            </div>
          </div>

          <div className="form-group">
           <div className="col-sm-offset-2 col-sm-10">
             <button type="submit" id="btn_login" className="btn btn-default">登录</button>
             <button type="submit" id="btn_newReg" className="btn btn-default mgl2">注册</button>
           </div>
         </div>
        </form>
      </div>
    )
  }
})