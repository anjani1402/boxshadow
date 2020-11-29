import './App.css';
import React, { useState } from 'react';
function App() {

  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const[clr, setclr] = useState("black")
  return (
    <div className="App">
      <div className="controls">
          <label>Horizontal Length</label>  
          <input type="range" min="-100" max="100" value={Hori} onChange ={(e) => setHori(e.target.value)}/> <br /> <br />
          <label>Vertical Length</label>  
          <input type="range" min="-100" max="100" value={Veri} onChange ={(e) => setVeri(e.target.value)}/> <br/> <br />
          <label>Blur Range</label>  
          <input type="range" min="0" max="100" value={Blur} onChange ={(e) => setBlur(e.target.value)}/> <br/> <br />
          <label>set background Colour</label>  
          <input type= "color" value={clr} value={clr} onChange ={(e) => setclr(e.target.value)}/>
      </div>
    
    
    <div className="output">
      <div className="box" style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${clr}`}}>
        
      </div>
    </div>
  </div>
  );
}

export default App;
