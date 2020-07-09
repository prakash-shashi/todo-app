import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponet'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponet from './ErrorComponent'
class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}/>   
                    <Route path="/Login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/Welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={ErrorComponet}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}
export default TodoApp