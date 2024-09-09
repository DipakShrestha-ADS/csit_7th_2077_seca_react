import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Documents = () => {
    const [count, setCount] = useState(10)
    const [isEven, setIsEven] = useState(true) 
    useEffect(
        ()=>{
            console.log("use effect called")
            if(count % 2 == 0){
                setIsEven(true)
            }else{
                setIsEven(false)
            }
        },
        [count]
    )
    const handleIncrement = ()=>{
        setCount((prevValue) => prevValue + 1)
    }
    return (
        <>
            <Navbar title={"Documents"} />
            <h1>Doucments Page</h1>
            <p>Count Value: {count}</p>
            <h4>{isEven ? "Even" : "Odd"}</h4>
            <button onClick={handleIncrement}>Increment</button>
        </>
    );
}
export default Documents