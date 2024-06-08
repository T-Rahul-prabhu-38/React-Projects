import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]



export default function Gameboard({onSelectq}) {

    // const [gameboard,setGameBoard] = useState(initialGameBoard);

    // function handleBox(rowid,colid) {
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedArray = [...prevGameBoard.map(innerArray => [...innerArray])];

    //             updatedArray[rowid][colid] = activePlayerSymbol;
    //             return updatedArray;
    //     }
    // )
    //     onSelectq(); 
    // }

   
    console.log(gameboard)


    return (
        <>
            <ol id="game-board">
                {gameboard.map((row, rowid) => (
                    <li key={rowid}>
                        <ol>
                            {
                                row.map((playersymbol, colid) =>
                                    <li key={colid}>
                                        <button onClick={onSelectq}>{playersymbol}</button>
                                    </li>
                                )
                            }
                        </ol>
                    </li>
                )
                )
                }
            </ol>

        </>
    );
}