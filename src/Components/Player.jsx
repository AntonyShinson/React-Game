import {useState} from 'react';

/* Code used to check whether the player has won*/

export default function Player({initialName,symbol,isActive,changeName})
{
    const[isEditing,setIsEditing]=useState(false);
    const[playerName,setPlayerName]=useState(initialName);
    
    function handleChange(event)
    {
        setPlayerName(event.target.value);
    }

    function handleEdit()
    {
        setIsEditing((editing)=>!editing);
        if(isEditing)
        {
            changeName(symbol,playerName);
        }
    }

    
    let editablePlayerName=<span className="player-name">{playerName}</span>
    if(isEditing)
    {
        editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
    }
    
    return (<>
        <li className={isActive?'active':undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save':'Edit'}</button>
        </li >
        </>
    );
}
