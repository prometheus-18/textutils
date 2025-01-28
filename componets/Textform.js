import React, { useState } from 'react'


export default function Textform
    (props) {
    const [text, setText] = useState('Enter text here');
    const handelUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelonclick = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.header}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handelonclick}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handelUpclick}>Convert to Uppercase</button>
        </div>
    )
}

