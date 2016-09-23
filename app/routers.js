import React from "react"
import ReactDom from "react-dom"
import {Router,Redirect,Route,hashHistory} from 'react-router'
import * as component from "./components/index"

const {
  About,
  App,
  Home,
  Main
}=component

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
    <Redirect from="message/:id" to="/app"/>
    <Route path="/about" component={About}/>
    <Route path="/app" component={App}/>
    <Route path="/app/*" component={Home}/>
  </Router>
,document.getElementById('root'));
