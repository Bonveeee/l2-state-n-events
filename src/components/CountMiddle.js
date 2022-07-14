import React, { useState } from "react";

function CountMiddle(){

    const [count, setCount] = useState(0);
    function addFifty(){
        setCount(50)
    }
    
    // function addValue(current){
    //     setCount(current +1)
    // }
    
    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={addFifty}>CLICK ME</button>
                </center>
            </div>
    )
    //TODO : Increment value by using event hanlder second 
}


export default CountMiddle