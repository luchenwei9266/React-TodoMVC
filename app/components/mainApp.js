let React = require('react');
let TodoForm = require('./todoForm.js');
let TodoList = require('./todoList.js');
let Siderbar = require('./sidebar');
let User = require('./login/user.js');
let AV = require('leancloud-storage');
let USEROBJID = '';
let USERID = '';
let USERNAME = '';

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

      var loginedObj = {
        display : 'none'
      };

      var loginBtnHideObj = {
        display : 'block'
      }

      return {
        todoList : todoList,
        todoDisplayObj : todoDisplayObj,
        loginDisplayObj : loginDisplayObj,
        loginedObj : loginedObj,
        loginBtnHideObj : loginBtnHideObj
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
      console.log(saveUserId);
      USEROBJID = saveUserId.id;
      USERID = saveUserId.attributes.user_id;
      USERNAME = saveUserId.attributes.username;
    },
    upload : function () {
      if (USERID.length != 0) {
        // 如果用户已登录
        var component = this;

        var query = AV.Object.extend('TodoList');

        var todoItem = new query();
        // TODO
        todoItem.set('user_id',USERID);
        todoItem.set('text',"你好");
        todoItem.set('doneTodoNum',"-1");

        todoItem.save().then(function(todo){
        },function(error){

        })
      } else {
        // 如果用户未登录
        alert('您还没有登录，请注册登陆后再进行同步操作!');
      }
    },
    logined : function () {
      var tempLoginedObj = { display : 'block'};
      var tempLoginBtnHideObj = { display : 'none' };
      this.setState({
        loginedObj : tempLoginedObj,
        loginBtnHideObj : tempLoginBtnHideObj
      })
    },
    logout : function () {
      AV.User.logOut();
      var currentUser = AV.User.current();
      USEROBJID = '';
      USERID = '';
      USERNAME = '';

      var tempLoginedObj = { display : 'none'};
      var tempLoginBtnHideObj = { display : 'block' };
      this.setState({
        loginedObj : tempLoginedObj,
        loginBtnHideObj : tempLoginBtnHideObj
      });

      this.showTodo();
    },
    render: function () {
        return (
          <div>

            <Siderbar showLogin = {this.showLogin}
                      loginedObj = {this.state.loginedObj}
                      loginBtnHideObj = {this.state.loginBtnHideObj}
                      USERNAME = {USERNAME}
                      logout = {this.logout}/>

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
                      saveUserId = {this.saveUserId}
                      logined = {this.logined}/>
              </div>


            </div>

          </div>
        );
    }
});
