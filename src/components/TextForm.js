import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here2'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <h1> </h1>
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
            <div className='container my-3'>
                <h2>Your text Summary</h2>
                <p>You have entered {text.split(" ").length} words and {text.length} characters</p>
                <p>You will need {0.008 *  text.split(" ").length} minutes to read this text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}