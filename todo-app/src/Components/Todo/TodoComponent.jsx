import React, {Component} from 'react'
import {BrowserRouter as useParams} from 'react-router-dom'
import moment from 'moment'
import { Formik, Form,Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'
import Authentication from './Authentication.js'


class TodoComponent extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: 1,
            description:'Learn React',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)
    }

    componentDidMount()
    {
        let username = Authentication.getLoggedInUserName()
        TodoDataService.retrieveTodos(username, this.state.id)
        .then(response=>console.log(response
            // {
            //     description: response.data.description,
            //     targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            // }
        ))
    }


    validate(values)
    {
        let errors={}
        if(!values.description)
        {
            errors.description='Enter Description'
        }
        else if(values.description.length<5)
        {
            errors.description='Should be atleast 5 Characters'
        }

        if(!moment(values.targetDate).isValid())
        {
            errors.targetDate='Enter a Valid Target Date'
        }
        return errors
    }

    onSubmit(values)
    {
        console.log(values)
    }
    render(){  
        let {description,targetDate}=this.state
        // let targetDate=this.state.targetDate  
        // let todoid = useParams()
    return(
    
        <div className="container">
            <h1>Todo</h1>
            <div className="container">
                <Formik
                initialValues={{description,targetDate}}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={this.onSubmit}
                validate={this.validate}
                enableReinitialize={true}
                >
                    {
                        (props)=>(
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                <feildset className="form-group">
                                    <label>
                                        Description
                                    </label>
                                    <Field className="form-control" type="text" name="description"/>
                                </feildset>

                                <feildset className="form-group">
                                    <label>
                                        Target Date
                                    </label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </feildset>

                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        )
    }
}


// function TodoComponentFunction()
// {
//   const {id} = useParams();
//   return(
//     <div>
//       <TodoComponent id = {id}/>
//     </div>
//   )
// }

export default TodoComponent