let React = require('react');
let Siderbar = require('../todoFolder/sidebar.js');
let Register = require('./register.js');
let Login = require('./login.js');

module.exports = React.createClass({
  getInitialState : function () {
    var regDisplayObj = { display : 'none' };
    var loginDisplayObj = { display : 'block' };

    return{
      regDisplayObj : regDisplayObj,
      loginDisplayObj : loginDisplayObj
    }
  },
  loginToggle : function () {
    var tempLoginObj = { display : 'none'};
    var tempRegObj = { display : 'block' };

    this.setState({
      loginDisplayObj : tempLoginObj,
      regDisplayObj : tempRegObj
    })
  },
  regToggle : function () {
    var tempLoginObj = { display : 'block'};
    var tempRegObj = { display : 'none' };

    this.setState({
      loginDisplayObj : tempLoginObj,
      regDisplayObj : tempRegObj
    })
  },
  saveUserId : function(loginedUser) {
    this.props.saveUserId(loginedUser);
  },
  logined : function () {
    this.props.logined();
  },
  render: function (){
    return (
      <div>
        <div className="userWrap">
          <div style={this.state.loginDisplayObj}>
            <Login loginToggle = {this.loginToggle}
                   showTodo = {this.props.showTodo}
                   saveUserId = {this.saveUserId}
                   logined = {this.logined}/>
          </div>
          <div style={this.state.regDisplayObj}>
            <Register regToggle={this.regToggle}/>
          </div>
        </div>
      </div>

    )
  }
})
