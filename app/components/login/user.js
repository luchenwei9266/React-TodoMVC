let React = require('react');
let Siderbar = require('../sidebar.js');
let Register = require('./register.js');
let Login = require('./login.js');

module.exports = React.createClass({
  render: function (){
    return (
      <div>

        <Siderbar />

        <div className="userWrap">
          <Login />
        </div>

      </div>

    )
  }
})
