let React = require('react');
let AV = require('leancloud-storage');

module.exports = React.createClass({
  submitReg : function () {
    let component = this;

    var userEmail = $('#regInputEmai').val();
    var userName = $('#regInputName').val();
    var userPassword = $('#regInputPassword').val();
    var userConfirmPassword = $('#regConfirmPassword').val();

    if (userEmail.length == 0 || userName.length == 0 || userPassword.length == 0 || userConfirmPassword.length == 0) {
      alert('请正确的填入各项信息!');
      return false;
    }

    if (userPassword != userConfirmPassword) {
      alert('两次输入的密码不一样，请重新填写!');
      return false;
    }

    var user = new AV.User();
    user.setUsername(userName);
    user.setPassword(userPassword);
    user.setEmail(userEmail);
    user.signUp().then(function (loginedUser) {
        alert('注册成功!');
        setTimeout(function(){
          component.props.regToggle();
        },0)
    }, (function (error) {
        alert(error);
    }));

  },
  render: function (){
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="regInputEmai" className="col-sm-2 control-label">邮箱地址</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="regInputEmai" placeholder="请输入正确的邮箱地址，方便您以后找回密码"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="regInputName" className="col-sm-2 control-label">账户</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="regInputName" placeholder="请输入您的账户名"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="regInputPassword" className="col-sm-2 control-label">密码</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="regInputPassword" placeholder="请输入您的账户密码"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="regConfirmPassword" className="col-sm-2 control-label">确认密码</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="regConfirmPassword" placeholder="请再一次输入您的账户密码"/>
            </div>
          </div>
          <div className="form-group">
           <div className="col-sm-offset-2 col-sm-10">
             <button type="submit" id="btn_register" className="btn btn-default" onClick={this.submitReg}>注册</button>
           </div>
         </div>
        </form>
      </div>
    )
  }
})
