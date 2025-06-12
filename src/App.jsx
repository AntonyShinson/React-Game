import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import {useState} from 'react';
import Log from './Components/Log.jsx';
import { WINNING_COMBINATIONS } from "./Components/Win.js";
import GameOver from "./Components/GameOver.jsx";

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function derivedActivePlayer(gameTurns)
  {
    let currentPlayer='X';
      if(gameTurns.length > 0 && gameTurns[0].player==='X'){
        currentPlayer='O';
      }
      return currentPlayer;
  }
function App() {
  const[players,setPlayers]=useState({
    'X':'Player 1',
    '0':'Player 2',
  })
  console.log(players);
  const[gameTurns,setGameTurns]=useState([]);
  
  const activePlayer=derivedActivePlayer(gameTurns);

  let gameBoard=[...initialGameBoard.map(innerArray=>[...innerArray])];
  let winner;

  function handleSelectSquare(rowIndex,colIndex)
  {
      setGameTurns((prevTurns=>{
      let currentPlayer=derivedActivePlayer(prevTurns);
      const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];
      return updatedTurns;
    }
    ));
  }
  for(const turn of gameTurns)
    {
        const{square,player}=turn;
        const{row,col}=square;
        gameBoard[row][col]=player;
    }
  for(const combination of WINNING_COMBINATIONS)
    {
        const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
        if(firstSquareSymbol&&
          firstSquareSymbol===secondSquareSymbol&&
          firstSquareSymbol===thirdSquareSymbol)
        {
          winner=players[firstSquareSymbol];
        }
    }
  let isDraw=gameTurns.length=== 9 && !winner;
    
  function handleReset()
    {
      setGameTurns([]);
    }
  
  function nameChange(symbol,newName)
  {
    setPlayers(prevName=>
      {return {...prevName,
        [symbol]:newName
      }}
    );
  }
  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} changeName={nameChange}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'} changeName={nameChange}/>
      </ol>
      {(winner || isDraw) && <GameOver reset={handleReset} winner={winner}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>)
  ;

}

export default App
 