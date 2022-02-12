import React,{Component} from'react'
import {Navigate} from 'react-router-dom'
import Authentication from './Authentication.js'

class AuthenticatedRoute extends Component{
    render(){
        if(Authentication.isUserLoggedIn())
        {
            return {...this.props.children}
        }
        else{
            return <Navigate to="/Login"/>
        }
    }
}
export default AuthenticatedRoute