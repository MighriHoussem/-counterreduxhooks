import React,{useEffect} from 'react';
import Button from "@material-ui/core/Button";
import {useSelector,useDispatch} from "react-redux";

const Counter  = () => {

    const count =useSelector(state=>state.count);
    const dispatch = useDispatch ();

    const incrementCount = ()=>
    {
        dispatch({type:"INCREMENT"});
    }
    const decrementCount = ()=>{
        dispatch ({type: "DECREMENT"});
    }
    useEffect(() => {
        document.title = `Counter = ${count}`;
        return () => {
            console.log("Clean Up USeEffect");
        };
    }, null);

    return (
        <div className="container">
             <div className="Container">
             <h2>Counter = <span style={{color: 'green'}}>{count}</span></h2>
                <Button variant="contained" color="primary" onClick={incrementCount}  style={{marginRight:'1%'}}>+</Button>
                <Button variant="contained" onClick={decrementCount} color="secondary" >-</Button>
             </div>
        </div>
    );
}

export default Counter;