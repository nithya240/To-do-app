import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import Authentication from './Authentication.js'
import TodoDataService from '../../api/todo/TodoDataService'
import moment from 'moment'
import TodoComponent from './TodoComponent.jsx'

class TodoListComponent extends Component{
    constructor(props)
    {
        console.log('constructor')
        super(props)
        this.state={
            todo:
            [
                // {id:1, description:'LeetCode', Done: false, targetDate: new Date()},
                // {id:2, description:'Udemy courses', Done: false, targetDate: new Date()},
                // {id:3, description:'Writing BootCamp', Done: false, targetDate: new Date()},
                // {id:4, description:'Applying for part time', Done: false, targetDate: new Date()}
            ]
            
        }

        this.updateTodoClicked=this.updateTodoClicked.bind(this)
    }

    // updateTodoClicked(id)
    // {
    //     this.props.navigate(`/todo/$(id)`)
    // }

    componentWillUnmount()
    {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount()
    {
        console.log('componentDidMount')
        let username = Authentication.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(response=>this.setState({todo:response.data}))
    }

    updateTodoClicked(id)
    {
        console.log(`update` + id)
        this.props.navigate(`/Todo/${id}`);
        // let username=Authenticate.getLoggedInUserName()
        // TodoDataService.updateTodo(username,id)
        // .then(
        //     response=>{
        //         this.setState({message : `Updating of todo ${id} is Successful`})
        //         this.refreshTodos()
        //     }
        // )
    }

       render(){
           console.log('render')
        return( 
        <div>
            <h1>Todo List :)</h1>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todo.map(
                            todo=>
                            <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                            <td><button className="btn btn-warning">Delete</button></td>

                        </tr>
                        )
                  
                    }            
                </tbody>
            </table>
            </div>
        </div>
        )
    }

    }

    function WithNavigate(props){
        let navigate = useNavigate();
        return <TodoListComponent{...props} navigate={navigate}/>

    }
    export default WithNavigate