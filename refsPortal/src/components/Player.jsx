import { useState,useRef } from "react";

export default function Player() {

  const playerName = useRef('Anonymous');
  const[username,setusername] = useState('');

  function handleClick(){
    setusername(playerName.current.value);
    playerName.current.value = '';
  }

  function handleClear(){
    setusername('');
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {username??'...who?'} !</h2>
      <p>
        <input type="text" ref={playerName}/>
        <br />
        <button onClick={handleClick}>Set Name</button>
        <button onClick={handleClear}>clear</button>
      </p>
    </section>
  );
}
