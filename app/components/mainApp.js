var React = require('react');
var TodoForm = require('./todoForm.js');
var TodoList = require('./todoList.js');
var Siderbar = require('./sidebar');

require("!style!css!./../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("!style!css!./../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css");
require("!style!css!../css/style.css");

module.exports = React.createClass({
    getInitialState:function() {
      var todoList = [
        {text:'学习React啊啊啊啊啊'}
      ];

      return {
        todoList : todoList
      }
    },
    submitNewTodo : function(todo) {
      var list = this.state.todoList.concat(todo);
      this.setState({
        todoList : list
      });
    },
    delTodo : function(todoIndex) {
      this.state.todoList.splice(todoIndex,1)

      this.setState({
        todoList: this.state.todoList
      });
    },
    render: function () {
        return (
          <div>

            <Siderbar />

            <div className="content">
              <div className="todo-head">
                <p className="todo-title">TODO</p>
                <TodoForm todoList = {this.state.todoList}
                          submitNewTodo = {this.submitNewTodo} />
              </div>
              <div className="todo-foot">
                <TodoList todoList={this.state.todoList}
                          delTodo = {this.delTodo} />
               </div>
            </div>

          </div>
        );
    }
});
