import React, {useState}from 'react'

export default function TextForm(props) {
    const [text, setText] = useState()

    const functionClicked = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const functionLower = ()=>{
        let newText =  text.toLowerCase()
        setText(newText)
  }
  const functionCleared = ()=>{
    let newText =""
    setText(newText)
}


  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

    const functionChange = (event)=>{
        setText(event.target.value)
    }

    

  return (
    <>
      <div className='container' style={{color : props.Mode ==='dark'?'white':'#042743'}}>
        <h2 className="">{props.title} </h2>
        <div className='mb-3'>
        <textarea className='form-control' value={text} id='myBox' rows="6" onChange={functionChange}></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={functionClicked}>UpperCase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-danger mx-2" onClick={functionLower}>LowerCase</button>
        <button className="btn btn-secondary mx-2" onClick={functionCleared}>Clear</button>


      </div>
      <div>
        <p className='container'> {text}</p>
      </div>
    </>
  )
}
