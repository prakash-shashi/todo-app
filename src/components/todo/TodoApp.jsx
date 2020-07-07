import React, { Component } from 'react'
class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
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
                <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
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
export default TodoApp