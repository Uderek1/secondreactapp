import picture from './pictureicon.png';
import './App.css';
import React, { useState } from 'react';
import heart from './heart.jpg';
import linkedin from './linkedin.png';
function App() {
  const[writing,setWriting]=useState("My Name Is Derek");
  const handleName=()=>{
    setWriting("My Name Is Derek");
  }
  const handleSkills=()=>{
    setWriting("I'm a Frontend Developer");
  }
  const[count,updateCount]=useState(0);
  const handleCount=()=>{
    updateCount(count+1);
  }
  return (
    <body>
      <div class="container">
        <div id="s1">
          <img src={picture} alt="picture" width="150" height="150"/>
        </div>
        <div id="s2">
          <h1><strong>Hi!</strong></h1>
          <p>{writing}</p>
        </div>
        <div id="s3">
          <button id="name" onClick={handleName}>Name</button>
          &nbsp;
          &nbsp;
          <button id="skills" onClick={handleSkills}>Skills</button>
        </div>
        <p></p>
        <div id="s4">
          <span id="display">{count}</span>
          &nbsp;
         <button id="hearts" onClick={handleCount}><img src={heart} width="50" height="50"/></button>
        </div>
        <div id="s5">
        <a href='https://www.linkedin.com/in/derekuzoh/'><button id="linkedin"><img src={linkedin} width="75" height="75"/></button></a>
        </div>
      </div>
    </body>
  );
}

export default App;
