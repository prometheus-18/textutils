import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState(''); 
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE");
    }
    
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const handleCopy = () => {  
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard");
    }

    const containerStyle = {
        backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    const textareaStyle = {
        backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;
    const charCount = text.length;
    const readingTime = (0.008 * wordCount).toFixed(2);

    return (
        <>
            <div className='container' style={containerStyle}>
                <h1>{props.header}</h1>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange}
                        style={textareaStyle}
                        id="myBox" 
                        rows="8"
                        placeholder="Enter your text here..."
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                    Copy Text
                </button>
            </div>
            
            <div className="container my-3" style={containerStyle}>
                <h2>Your text summary</h2>
                <p><b>{wordCount} words and {charCount} characters</b></p>
                <p>{readingTime} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
