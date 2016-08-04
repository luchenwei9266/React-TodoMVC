let React = require('react');
let TodoForm = require('./todoForm.js');
let TodoList = require('./todoList.js');
let Siderbar = require('./sidebar');
let User = require('./login/user.js');


module.exports = React.createClass({
    getInitialState:function() {
      var todoList = [
        {text:'学习React啊啊啊啊啊'}
      ];

      var todoDisplayObj = {
        display : 'block'
      };

      var loginDisplayObj = {
        display : 'none'
      };

      return {
        todoList : todoList,
        todoDisplayObj : todoDisplayObj,
        loginDisplayObj : loginDisplayObj
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
    showLogin : function () {
      var tempTodoObj = { display : 'none'};
      var tempLoginObj = { display : 'block' };
      this.setState({
        todoDisplayObj : tempTodoObj,
        loginDisplayObj : tempLoginObj
      })
    },
    showTodo : function () {
      var tempTodoObj = { display : 'block'};
      var tempLoginObj = { display : 'none' };
      this.setState({
        todoDisplayObj : tempTodoObj,
        loginDisplayObj : tempLoginObj
      })
    },
    render: function () {
        return (
          <div>

            <Siderbar showLogin={this.showLogin} />

            <div className="content">
              <div style={this.state.todoDisplayObj}>
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

              <div style={this.state.loginDisplayObj}>
                <User showTodo={this.showTodo}/>
              </div>


            </div>

          </div>
        );
    }
});
