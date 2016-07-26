var React = require('react');
var AV = require('leancloud-storage');

module.exports = React.createClass({
  submitText:function(e){
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

    // 测试leancloud
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
      words: 'Hello World!'
    }).then(function(object) {
      alert('LeanCloud Rocks!');
    })
  },
  render:function(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-sm-10 col-xs-10">
            <input ref="todoText" className="form-control todo-input" type="text"/>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <button className="btn btn-primary btn-submit" onClick={this.submitText}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
});
