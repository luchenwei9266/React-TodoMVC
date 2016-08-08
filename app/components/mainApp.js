let React = require('react');
let TodoForm = require('./todoForm.js');
let TodoList = require('./todoList.js');
let Siderbar = require('./sidebar');
let User = require('./login/user.js');
let AV = require('leancloud-storage');
let USEROBJID = '';
let USERID = '';

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
    saveUserId : function (saveUserId) {
      USEROBJID = saveUserId.id;
      USERID = saveUserId.attributes.user_id;
    },
    upload : function () {
      console.log(111);

      if (currentUser) {
        // 如果用户已登录
        var component = this;
        var currentUser = AV.User.current();

        var query = AV.Object.extend('TodoList');

        var todoItem = new query();

        todoItem.set('user_id',USERID);
        todoItem.set('text',"你好");
        todoItem.set('doneTodoNum',"-1");

        todoItem.save().then(function(todo){
          console.log(todo);
        },function(error){

        })
      } else {
        // 如果用户未登录
      }
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
                            submitNewTodo = {this.submitNewTodo}
                            upload = {this.upload} />
                </div>
                <div className="todo-foot">
                  <TodoList todoList={this.state.todoList}
                            delTodo = {this.delTodo}
                              />
                 </div>
              </div>

              <div style={this.state.loginDisplayObj}>
                <User showTodo = {this.showTodo}
                      saveUserId = {this.saveUserId}/>
              </div>


            </div>

          </div>
        );
    }
});
