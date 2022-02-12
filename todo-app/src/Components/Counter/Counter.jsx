import React, { Component } from 'react'
import PropType from 'prop-types'
import './Counter.css'
import ThirdComponent from '../Examples/ThirdComponent';

class Counter extends Component{
    //Defining the initial state in a constructor
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
    render(){
        let style= {fontSize:"50px", padding:"150x,30px"} 
        return(
        <div className="App">
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
          <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
          <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton> 
          <span className="count" style={style} >{this.state.counter}</span>
          <div><button className="reset" onClick={this.reset}>Reset</button></div>
        </div>
        
      );
    }

    reset(){
        this.setState(
            {
                counter: 0
            })
    }

increment(by){ 
    //console.log(`increment from parent - ${by}`)
    this.setState(
    {
        counter: this.state.counter+by
    })
}

decrement(by){
    this.setState(
        {
             counter: this.state.counter-by
        }
    )}
}

class CounterButton extends Component{
    //Defining the initial state in a constructor
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    render=()=> { //using arrow function
        let style= {fontSize:"50px", padding:"150x,30px"}
    return(
        <div className="Counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button>
        </div>
    )
}

increment=()=>{ //using arrow function
    //console.log('increment');
    //this.state.counter;

    this.setState({
        counter: this.state.counter+ this.props.by
        }
    )
    this.props.incrementMethod(this.props.by);
}

decrement=()=>{
    this.setState(
         {
            counter: this.state.counter-this.props.by
        }
    )
    this.props.decrementMethod(this.props.by);
}
}
/* Counter.defaultProps = {
    by : 1
}*/

/* Counter.prototype={
    by: PropType.numbers
} */
export default Counter 