import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import Authentication from './Authentication.js'
import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom'
// import {withRouter} from 'react-router'

function HeaderComponent(){
    const isUserLoggedIn   = Authentication.isUserLoggedIn();
    console.log(isUserLoggedIn)
    return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href="http://localhost:3000/Welcome/Nithya" className='navbar-brand navbar-dark'>FirstApp &nbsp;</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedIn && <li className='navbar-link'><Link className='navbar-link' to='/Welcome/Nithya'>Home Page &nbsp;</Link></li>}
                        {isUserLoggedIn && <li className='navbar-link'><Link className='navbar-link' to='/Todo'>Todo List</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'> 
                        {!isUserLoggedIn && <li className='navbar-link'><Link className='navbar-link' to='/Login'>Login &nbsp;</Link></li>}
                        {isUserLoggedIn && <li className='navbar-link '><Link className='navbar-link' to='/Logout' onClick={Authentication.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
    )
}

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history= useNavigate();
        return(
            <Component history={history}{...props}/>
        );
    }
    return Wrapper;
}
export default withRouter(HeaderComponent)