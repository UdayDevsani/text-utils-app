/* eslint-disable jsx-a11y/heading-has-content */
import React, {useState} from 'react'

function TextForm(props) {
    
  const [text, setText] = useState('Enter the text here');
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearcaseClick = () => {
    let newtext = '';
    setText(newtext);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  
  const handleCopycaseClick = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
        <>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <label htmlFor="myBox" className='form-lable'></label>
            <textarea className='form-control' id='myBox' rows = "8" value={text} onChange={handleChange} placeholder="Enter your text here..."></textarea><br/>
            <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>&nbsp;
            <button className="btn btn-primary" onClick={handleLowercaseClick}>Convert to Lowercase</button>&nbsp;
            <button className="btn btn-primary" onClick={handleClearcaseClick}>Clear Text</button>&nbsp;
            <button className="btn btn-primary" onClick={handleCopycaseClick}>Copy Text</button>&nbsp;
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
        <p>{text.split("").length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length } Minutes read</p>
        </div>
        </>
  )
}

export default TextForm