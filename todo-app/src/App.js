import React, {Component} from 'react';
import './App.css';
import FirstComponent from './Components/Examples/FirstComponent';
import SecondComponent from './Components/Examples/SecondComponent';
import ThirdComponent from './Components/Examples/ThirdComponent';
import Counter from './Components/Counter/Counter';
import TodoApp from './Components/Todo/TodoApp';
import './bootstrap.css'



function App() {
  return (
    <div className="App">
      {/*<Counter></Counter>*/}
      <TodoApp></TodoApp>
    </div>
    
  );
}

function Examples() {
  return (
    <div className="Examples">
      My first application using react and spring boot:)
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
    
  );
}

export default App;