var React = require('react');
var TodoItem = require('./todoItem');

module.exports = React.createClass({
  delTodo : function(index) {
    this.props.delTodo(index);
  },
  doneTodo : function(index) {
    this.props.doneTodo(index);
  },
  render : function() {
    var todoList = this.props.todoList;
    var todoAllItem = todoList.map(function(item,listIndex){
        return <TodoItem num = {listIndex + 1}
                         text = {item.text}
                         key = {listIndex + 1}
                         listIndex = {listIndex}
                         delTodo = {this.delTodo} />
    }.bind(this));

    return(
      <div className="todo-list">
        <ul className="todo-item-wrap">
          {todoAllItem}
        </ul>
      </div>
    )
  }
});
