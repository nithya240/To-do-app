import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import Authentication from './Authentication.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import TodoListComponent from './TodoListComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
// import history from 'history/browser';
//import { useNavigate } from 'react-router-dom'

function TodoApp(){
    // const LoginComponentWithNavigation = withNavigation(LoginComponent);
    // const WelcomeComponentWithParams = withParams(WelcomeComponent);
    // const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    // const TodoListComponentWithNavigation = withNavigation(TodoListComponent);
    // const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

        return(
            <div className="TodoApp">
                
            <Router>
                 <HeaderComponent/>
                 <Routes>
                 <Route path="/" exact element={<LoginComponent/>}/>
                    <Route path="/Login" element={<LoginComponent/>}/>
                    {/* <Route path="/todo/:id" element={<AuthenticatedRoute><TodoComponent/></AuthenticatedRoute>}/> */}
                    <Route path="/Welcome/:name" element={<AuthenticatedRoute><WelcomeComponent/></AuthenticatedRoute>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                    <Route path="/Todo/:id" element={<AuthenticatedRoute><TodoComponent/></AuthenticatedRoute>}/>
                    <Route path="/Todo" element={<AuthenticatedRoute><TodoListComponent/></AuthenticatedRoute>}/>
                    <Route path="/Logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                 </Routes>
                 <FooterComponent></FooterComponent>
            </Router>
               {/*<LoginComponent></LoginComponent>
               <WelcomeComponent/>*/}
             </div>
        );

    }   

    // class TodoComponent extends Component{
    //     constructoer(props)
    //     {
    //         super(props)
    //         this.state = { id: this.state.params.id }
    //     }
    //     onSubmit(values)
    //     {
    //         if(this.state.id==-1){
    //             TodoDataService.createTodo(username,todo).then(()=>this.props.navigate(`/todo`))
    //         }
    //         else{
    //             TodoDataService.updateTodo(username,this.state.id,todo).then(()=>this.props.navigate(`/todo`))
    //         }
    //     }
    // }

export default TodoApp