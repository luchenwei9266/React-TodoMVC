var React = require('react');

module.exports = React.createClass({
  getInitialState : function () {
    var doneStyleObj = []

    return {
      doneStyleObj : doneStyleObj
    }
  },
  delTodo : function(e) {
    e.preventDefault();

    var parent = e.target.parentNode
    parent.style.color = 'black';

    var index = e.target.dataset.listIndex;
    this.props.delTodo(index);
    this.state.doneStyleObj.splice(index,1);
  },
  doneTodo : function(e) {
    e.preventDefault();

    var parent = e.target.parentNode
    parent.style.color = 'rgba(102, 105, 99, 0.72)';

    var index = e.target.dataset.listIndex;
    var doneStyleObj = this.state.doneStyleObj;
    var tempObj = {
      textDecoration : 'line-through'
    };
    doneStyleObj[index] = tempObj;
    this.setState({
      doneStyleObj : doneStyleObj
    });
  },
  render:function(){
    return(
      <li className="todo-item">
        <div className = "todo-item-num col-md-1 col-sm-1 col-xs-1">{this.props.num}</div>
        <div className = "todo-item-txt col-md-9 col-sm-9 col-xs-9"
             style = {this.state.doneStyleObj[this.props.listIndex]}>
            {this.props.text}
          </div>
        <div className = "todo-item-done col-md-1 col-sm-1 col-xs-1"
             onClick = {this.doneTodo}
             data-list-index = {this.props.listIndex}
             >
             Done
           </div>
        <div className = "todo-item-del col-md-1 col-sm-1 col-xs-1"
             onClick = {this.delTodo}
             data-list-index = {this.props.listIndex}>
             X
        </div>
      </li>
    )
  }
})
