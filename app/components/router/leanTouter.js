/* React 路由学习测试用的JS
*
*
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link , hashHistory , IndexRoute , Redirect} from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

const Dashboard = React.createClass({
  render() {
    return <div>Wlecome to the app!</div>
  }
})

module.exports = React.createClass({
  render : function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard}/>
          <Route path="about" component={About}></Route>
          <Route path="inbox" component={Inbox}>
            <Route path="/messages/:id" component={Message}></Route>
            <Redirect from="message/:id" to="/messages/:id" />
          </Route>
        </Route>
      </Router>
    )
  }
})
