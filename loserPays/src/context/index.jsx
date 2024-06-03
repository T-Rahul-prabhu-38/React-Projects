import { useState, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const MyContext =  createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1);
    const [players,setPlayers] = useState([]);
    const [result,setResult] = useState('');

    const addPlayerHandler = (name) =>{
        setPlayers(prevState => ([
            ...prevState,
            name
        ]));
    }

    const removePlayerHandler = (idx) => {
        let newArray = [...players];
        newArray.splice(idx,1);

        setPlayers(newArray);
    }

    const nexthandler = ()=>{
        if(players.length < 2){
            toast.error('You need more than one player',{
                 position: toast.POSITION.TOP_LEFT,
                 autoClose:2000
            })
        }
        else {
                setStage(2);
                setTimeout(()=>{
                    generateLooser();
                },2000);
            }
    }

    const generateLooser = () => {
        let result = players[Math.floor(Math.random()*players.length)];
        setResult(result);
        console.log(result);
    }

    return(
        <MyContext.Provider value={{
            // STATE
            stage:stage,
            players:players,
            result:result,
            // METHODS
            addPlayer:addPlayerHandler,
            removePlayer:removePlayerHandler,
            next:nexthandler

        }}>
            {props.children}
        </MyContext.Provider>
    )

}

export {
    MyContext,
    MyProvider
}