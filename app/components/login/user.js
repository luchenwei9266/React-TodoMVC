let React = require('react');
let Siderbar = require('../sidebar.js');
let Register = require('./register.js');

module.exports = React.createClass({
  render: function (){
    return (
      <div>

        <Siderbar />

        <div className="userWrap">
          <Register />
        </div>

      </div>

    )
  }
})
