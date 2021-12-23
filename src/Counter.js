import React, { useState } from 'react';
 
//  class Counter extends Component{
//     constructor(props){
//      super(props);
//      this.state={
//          count:0
//      };
//     }
//     render(){
//         return (
//             <div>
//                 <h1> {Date()} </h1>
//                 <p> you clicked {this.state.count}</p>
//                 <button onClick={()=> this.setState({count:this.state.count+1})}>click Me</button>
//             </div>
//         )
//     }
// }
// export default Counter;
export default function Counter(){
    const[count,setcount]=useState(0);
    return(
        <div>
            <span className="btn btn-danger brn-sm m-2"  >  you clickedd {count} times</span>
            <button className="btn btn-secondary btn-sm" onClick={()=>{  setcount(count+1)}}> CLICK ME</button>
        </div>
    )
}