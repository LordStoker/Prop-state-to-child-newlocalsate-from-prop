import React, {useState} from "react"


export default function Box(props) {
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    const [boxValue, setBoxValue] = useState(props.on)
    const styles = {
        backgroundColor: boxValue ? "#222222" : "transparent"
    }
    
    function toogleBackgroundColor(){
        setBoxValue(prevValue => !prevValue)
    }
    
    return (
        <div style={styles} className="box" onClick={toogleBackgroundColor}></div>
    )
}