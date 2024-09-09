import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

const Downloads = () => {
    const [timerCount, setTimerCount] = useState(0)
    const titleRef = useRef()
    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                   setTimerCount((prevValue) => timerCount + 1)
                },
                1000
            )
        },
    )
    const changeTitleStyle = ()=>{
        titleRef.current.style = "color: blue; font-size: 30px;"
    }
    const inputRef = useRef()
    const handleFocus = ()=>{
        inputRef.current.focus()
    }
    const handleUnFocus = ()=>{
        inputRef.current.blur()
    }
    return (
        <>
            <Navbar title={"Downloads"} />
            <h1 onClick={changeTitleStyle} ref={titleRef}>Downloads Page</h1>
            <p>Timer Count: <span style={
                {
                    fontSize: "50px",
                    color: "red",
                }
            }>{timerCount}</span></p>
            <input type="text" ref={inputRef}/>
            <br/><br/>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleUnFocus}>UnFocus</button>
        </>
    );
}
export default Downloads

