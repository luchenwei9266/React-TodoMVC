var React = require('react');
var AV = require('leancloud-storage');

module.exports = React.createClass({
  submitText : function (e) {
    e.preventDefault();
    var tempValue = this.refs.todoText.value;
    if (tempValue.length <= 0) {
      alert('不能提交空白内容')
      return false
    }

    var todoList = this.props.todoList;

    var newObj = {
      num : todoList.length + 1,
      text : tempValue
    }
    this.refs.todoText.value = '';
    this.props.submitNewTodo(newObj);

  },
  render : function () {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <input ref="todoText" className="form-control todo-input" type="text"/>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <form className="form-inline">
              <div className="form-group">
                <button className="btn btn-primary btn-submit" onClick={this.submitText}>添加</button>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-submit mgl02" onClick={this.props.upload}>同步</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
});
