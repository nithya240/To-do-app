import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import Authentication from './Authentication.js'
class LoginComponent extends Component{

    constructor(props){
    super(props)

    this.state={
        username:'firstapp',
        password:'',
        hasLoginFailed:false,
        showSuccessMessage:false
    }
    this.handlerChange=this.handlerChange.bind(this);
    this.loginClicked=this.loginClicked.bind(this);
} 
handlerChange(event)
{
   // console.log(this.state)
    this.setState(
        {
            [event.target.name]
            :event.target.value
        }
    )

}

loginClicked()
{
    if(this.state.username ==='firstapp' && this.state.password ==='dummy')
    {
        Authentication.registerSucccessfulLoggedIn(this.state.username,this.state.password);
        this.props.navigate(`/Welcome/${this.state.username}`);

        // this.props.history.push(`/Welcome`)
        // const navigate = useNavigate();
        // navigate.push(`/Welcome`)
    //    this.setState({showSuccessMessage:true})
    //    this.setState({hasLoginFailed:false})
    }
    else
    {
        console.log('Failed')
        this.setState({hasLoginFailed:true})
        this.setState({showSuccessMessage:false})
    }
    
}
render(){
    return(
        <div>
            <h1>Login</h1>
            <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials!</div>}
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {/*<ShowLoginSuccessfully showSuccessMessage={this.state.showSuccessMessage }/>*/}
                UserName:<input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handlerChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        </div>

    )
    }
}

function ShowInvalidCredentials(props)
{
    if(props.hasLoginFailed)
    {
        return <div>Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSuccessfully(props)
{
    if(props.showSuccessMessage)
    {
        return <div>Login Successfully</div>
    }
    return null;
}
    function WithNavigate(props){
        let navigate = useNavigate();
        return <LoginComponent{...props} navigate={navigate}/>

    }

    export default WithNavigate