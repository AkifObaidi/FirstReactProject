import React, { Component } from 'react';
import Counter from './counter.jsx';

class counters extends React.Component {
    render() { 
        const {counters,onReset,onDelete,onIncrement,onAdd}=this.props;
        return <div>
            <button className="btn btn-primary m-2" onClick={onReset}>Reset</button>
            <button className="btn btn-warning m-2 " style={{color:'white'}} onClick={onAdd}>Add</button>

            {counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    counter={counter} 
                    delete={ ()=> onDelete(counter.id)}
                    increment={()=> onIncrement(counter.id)}
                 />
            )}
        </div>;
    }
}
 
export default counters;