let React = require('react');

module.exports = React.createClass({
  render: function (){
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="regInputEmai" className="col-sm-2 control-label">邮箱地址</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="regInputEmai" placeholder="请输入正确的邮箱地址，注册成功后这个邮箱地址将作为您的用户名"/>
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
             <button type="submit" id="btn_register" className="btn btn-default">注册</button>
           </div>
         </div>
        </form>
      </div>
    )
  }
})
