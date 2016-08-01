let React = require('react');

module.exports = React.createClass({
  render: function (){
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail13" className="col-sm-2 control-label">邮箱地址</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail13" placeholder="请输入正确的邮箱地址，注册成功后这个邮箱地址将作为您的用户名"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">密码</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="请输入您的账户密码"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4" className="col-sm-2 control-label">确认密码</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword4" placeholder="请再一次输入您的账户密码"/>
            </div>
          </div>
          <div className="form-group">
           <div className="col-sm-offset-2 col-sm-10">
             <button type="submit" className="btn btn-default">注册</button>
           </div>
         </div>
        </form>
      </div>
    )
  }
})
