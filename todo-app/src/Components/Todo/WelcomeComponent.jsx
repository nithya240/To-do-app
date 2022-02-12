import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom'
import React, { Component } from 'react'
import { render } from '@testing-library/react'
import HelloWorldService from '../../api/todo/HelloWorldService'



class WelcomeComponent extends React.Component{
    constructor(props)
    {
      super(props)
      this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
      this.state = {
        welcomeMessage : ''
      }
      this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
      this.handleErrorResponse = this.handleErrorResponse.bind(this);

    }
    //let {name}=useParams();
    render(){
    return (
     <>
        <h1>Welcome :)</h1>
        <div className="container"> 
        {this.props.loginName} Welcome to the Todo Application :). You can manage you Todos List <Link to="/Todo">here!</Link>
       </div>
       <div className="container">
          Click here to get a customized welcome message.
          <button onClick = {this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
       </div>
       <div className="container">
          {this.state.welcomeMessage}
       </div>
     </>
     )
}

retrieveWelcomeMessage()
{
  // HelloWorldService.executeHelloWorldService()
  // .then( response => this.handleSuccessfulResponse(response) )

//   HelloWorldService.executeHelloWorldBeanService()
//   .then( response => this.handleSuccessfulResponse(response) )
// }
HelloWorldService.executeHelloWorldPathVariableService(this.props.loginName)

  .then( response => this.handleSuccessfulResponse(response))
  .catch(error => this.handleErrorResponse(error))
}

handleSuccessfulResponse(response)
{
  console.log(response)
  this.setState({welcomeMessage : response.data.message})
}

handleErrorResponse(error)
{
  console.log(error.response)
  this.setState({welcomeMessage : error.response.data.message})
}
}

function WelcomeFunction()
{
  const {name} = useParams();
  return(
    <div>
      <WelcomeComponent loginName = {name}/>
    </div>
  )
}

 export default WelcomeFunction
//onClick = {this.retrieveWelcomeMessage},{name}