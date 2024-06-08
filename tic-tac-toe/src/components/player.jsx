import { useState } from "react"

export default function Player({initialname,symbol,isActive}){

    //checking if edit button is pressed
    const [isEditing, setIsEditing] = useState(false);
    //checking if player name is updated
    const[playerName,setPlayerName] = useState(initialname);

    //function to handle edit button
    function handleEdit(){
        setIsEditing((edit)=>!edit);
    }

    //function to handle name change
    function handleChange(event){
        console.log(event.target.value);
        setPlayerName(event.target.value)
    }

    //regular name and button
    let EditPlayerName = <span className="player-name">{playerName}</span>
    let buttonchange = "edit";


    if(isEditing){
        //updated name and button
        EditPlayerName = <input type="text" defaultvalue={initialname} onChange={handleChange} required />
        buttonchange= "save";
    }

    

    console.log(isEditing);


    return(
    <>
        <li className={isActive?"active":undefined} >
          <span className="player">
            {EditPlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEdit} >{buttonchange}</button>
        </li>
    </>
);
}