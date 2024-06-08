import { useState } from "react"
import Player from "./components/player"
import  Gameboard  from "./components/gameboard";

function App() {

  const[gameTurns,setGameTurns] = useState([]);
  const [activePlayer,SetActivePlayer] = useState('X');

  function handleActive(rowid,colid){
    SetActivePlayer((curr)=>curr==='X'?'O':'X');

    setGameTurns((prevTurns) =>{
      const updatedTurns = [
        {square : {row:rowid , col:colid},Player: activePlayer },
        ...prevTurns];
    });
  }

  return (
    <>
    <div id ='game-container'>
      <ol id="players" className="highlight-player">
        <Player initialname = "player1" symbol="X" isActive={activePlayer==='X'} />
       <Player initialname = "player2" symbol ="O" isActive={activePlayer==='O'}/>
      </ol>
      <Gameboard  onSelectq={handleActive} activePlayerSymbol={activePlayer}/>
    </div>
    log
    </>
  )
}

export default App
