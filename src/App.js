import './App.css';
import NavBar from './components/NavBar.jsx';
import Counters from './components/counters.jsx';
import React, { Component } from 'react';
class App extends Component{
  state={
    counters:[
        {id:1, count:4},
        {id:2, count:2},
        {id:3, count:3},
    ]
}
handleAdd=()=>{
  let counter = {};
  counter.id=this.state.counters.length+2;
  counter.count=parseInt(prompt('Increment Number:'));
  counter.count=(isNaN(counter.count)?counter.count=0:counter.count=counter.count)
  this.setState({counter:this.state.counters.push(counter)});
}
increment=counterID=>{
    let counters = this.state.counters.map(c=>{
        if(c.id === counterID){
            c.count +=1;
        }
        return c;

    });
    this.setState({counters})
}
handleReset = ()=> {
    let counters = this.state.counters.map(c=>{c.count = 0; return c});
    this.setState({counters})
    
}
deleteHandle =counterI=>{
    let counters = this.state.counters.filter(counter => counter.id !== counterI);
    this.setState({counters});
}
render(){
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.count >0).length} />
      <main className='container'>
        {(this.state.counters.length === 0)?<h1>Please Add Tags!</h1>:<h1></h1>}
        <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.deleteHandle} onIncrement={this.increment} onAdd={this.handleAdd}/>
      </main>
    </React.Fragment>
  );
}
formatCounters=()=>{
  let res=(this.state.counters.length<0)?<h1>Please Add Tags!</h1> : <h1></h1>
  return res
}
}

export default App;
