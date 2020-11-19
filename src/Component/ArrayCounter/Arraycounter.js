import React, { useState } from 'react'
import "./Arraycounter.css"
function Arraycounter() {
    const [hook , setHook] = useState([])
    const [empty,setEmpty] = useState(false);
    function HandleClick1()
    {
        var x  =  []
        x.push(Math.floor(Math.random() * 10) + 1);
       x.concat(hook)
        setHook([...hook,x]);  
        setEmpty(hook.length === 0 )  
    }
    function HandleClick2()
    {
       var arr2 = []
       for(var i = 1; i< hook.length; i++)
                {
                    arr2.push(hook[i])
                }
        setHook(hook => arr2)
    }
    return (
        <div>
            <div className = "heading">Queue Implementation</div>
            <button className = " button btn btn-outline-success " onClick = {HandleClick1} > Enqueue </button>
            <button className = " button btn btn-outline-danger" onClick = {HandleClick2} > Dequeue </button>
            <div>
                {
                    (hook.length === 0) ?  <div className = "empty btn btn-outline-info">Empty</div> :   <div className = "btn btn-outline-warning" >size : {hook.length}</div>
                }
            </div>
            <ol>
            {
           hook.map( (hook1,hook2) =>
            hook2 === 0 ? <li className = "btn btn-outline-primary li1"> {hook1}  <span> Front </span> </li> : <li className = "btn btn-outline-success li1">{hook1} <br/> </li>

           )
           }
        </ol>

        </div>
    )
}

export default Arraycounter;
