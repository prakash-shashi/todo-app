import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom'
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
                    <Route path="/Welcome/:name" component={WelcomeComponent}/>
                    <Route path="/todos" component={ListTodosComponent}/>
                    <Route component={ErrorComponet}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
                    <div><a href="https://github.com/prakash-shashi/todo-app" className="navbar-brand">Shashi</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/shashi211">Home</Link></li>
                        <li><Link className="nav-link" to='/todos'>Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/Login">Login</Link></li>
                        <li><Link className="nav-link" to="/Logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <div><hr/> Footer </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'shashi211',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleusernameChange=this.handleusernameChange.bind(this)
        // this.handlepasswordChange=this.handlepasswordChange.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }
    render(){
        return(
            <div>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> 
                {/* {this.hasLoginFailed && <div>Invalid Credentials</div> }  */}
                <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                {/* {this.showSuccessMessage && <div>Login Successful</div>} */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
    // handleusernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         username:event.target.value
    //     })
    // }
    // handlepasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         password:event.target.value
    //     })
    // }
    handleChange(event){
        //console.log(this.state)
        //console.log(event.target.name)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked(event){
        if(this.state.username==='shashi211' && this.state.password==='dummy'){
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else{
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
        }
        //console.log(this.state)
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
            </div>
        )
    }
}

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos:[
            {id:1,description:'Learn React',done:false,targetDate:new Date},
            {id:2,description:'Learn AWS',done:false,targetDate:new Date},
            {id:3,description:'Learn K8s',done:false,targetDate:new Date}
        ]
        }
    }
    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>isCompleted</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )   
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

function ErrorComponet(){
        return(
            <div>
                I don't know what to do please contact ADSupport at abcd-efgh-ijkl-mnop
            </div>
        )
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }  
    return null 
}

function ShowSuccessMessage(props) {
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }  
    return null 
}
export default TodoApp