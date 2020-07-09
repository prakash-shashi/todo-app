import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

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
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />  */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div> }
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
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
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
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

export default LoginComponent