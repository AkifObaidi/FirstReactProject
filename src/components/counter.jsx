import React,{ Component } from 'react'

class Counter extends Component{


    render(){
        return(
            <div>
                <span className={this.getBtnClasses()} style={{ cursor:'auto' }}>
                    {this.formatCount()}
                </span>
                <button onClick={this.props.increment} className="btn btn-secondary btn-sm"  >Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={this.props.delete} >Delete</button>
            </div>
        )
    }
    formatCount(){
        const count = this.props.counter.count;
        return(
            count === 0 ? "Zero" : count
        )
    }
    getBtnClasses(){
        let btnstyle = "btn m-2 p-2 btn-";
        btnstyle += (this.props.counter.count === 0) ? "warning" : "primary";
        return btnstyle;
    }
}

export default Counter;