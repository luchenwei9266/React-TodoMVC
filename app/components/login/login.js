let React = require('react');
let AV = require('leancloud-storage');

module.exports = React.createClass({
  submitLogin : function () {
    var userName = $('#loginInputEmail').val();
    var userPassword = $('#loginInputPassword').val();
    var component = this;

    AV.User.logIn(userName, userPassword).then(function (loginedUser) {
      component.props.showTodo();
      component.props.saveUserId(loginedUser);
      $('#loginInputEmail').val('');
      $('#loginInputPassword').val('');
    }, function (error) {
      alert("账户名或者密码错误，请重新输入!");
    });
  },
  render: function (){
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="loginInputEmail" className="col-sm-2 control-label">账号</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="loginInputEmail" placeholder="请输入您的用户名"/>
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
             <button type="submit" id="btn_login" className="btn btn-default" onClick={this.submitLogin}>登录</button>
             <button type="submit" id="btn_newReg" className="btn btn-default mgl2" onClick={this.props.loginToggle}>注册</button>
             <button type="submit" id="btn_newReg" className="btn btn-default mgl2" onClick={this.props.showTodo}>关闭</button>
           </div>
         </div>
        </form>
      </div>
    )
  }
})
