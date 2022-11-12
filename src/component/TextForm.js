import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");

  }
  const handleOnChange=(e)=>{
    // console.log("Onchange");
    setText(e.target.value);
  }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Is Cleared","success");

  }
  const handleCamelCase=()=> {
    let array = text.split(" ");
    let newText = [];
    array.forEach(element => {
        let word = element.charAt(0).toUpperCase() + element.slice(1);
        newText.push(word);

      });
    setText(newText.join(" "));
    props.showAlert("Converted to CamelCase","success");

  }
  const handleSentenceCase=()=> {
    let array = text.split(".");
    let newText = [];
    array.forEach(element => {
        let word = element.charAt(0).toUpperCase() + element.slice(1);
        newText.push(word)
    });
    setText(newText.join("."));
    props.showAlert("Converted to SentenceCase","success");

  }
  const handleCopyClick=()=>{
    let newText=document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Is Copied","success");

  }
  return (
  <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Enter Your Text To Analysis Here!</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1"onClick={handleLowClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1"onClick={handleCamelCase}>Convert to Camel Case</button>
        <button type="button" className="btn btn-primary mx-1"onClick={handleSentenceCase}>Convert to Sentence Case</button>
        <button type="button" className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-1"onClick={handleCopyClick}>Copy Text</button>



    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary </h1>
    <p>Your text contains {text.split(" ").length-1}words and {text.length}characters.</p>
    <p>Your text can be read in {0.008 * text.split(" ").length}Minutes.</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:"Enter Something In The TextArea To Preview Here:)"}</p>

    </div>
  </>

  )
}
