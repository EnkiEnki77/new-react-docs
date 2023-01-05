
import './App.css';
import MyButton from './components/MyButton';
import {useState, useEffect} from 'react'
import Square from './components/Square';
import Board from './components/Board';

function App() {
  // Sometimes you want two or more sibling components to share state. IN that case lift the state logic up to the 
  //nearest ancestor of both and pass the data back down through props, the ancestor will then act as the source of
  //truth for both.
  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  const [board, setBoard] = useState(Array(9).fill(""))
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState(null)

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleBoardClick = (squareId) => {
    //checks on every click to see if theres a winner, and if there is dowsnt allow anymore state to be set
    //also checks that square isnt already filled. returns early in both instances.
    if(board[squareId] || calculateWinner(board)){
      return 
    }
    // its important to keep state immutable, never attempt to mutate state directly.
    //it allows you to keep old versions of the data intact so you can reuse them or reset to them later. 
    setBoard(prev => prev.map((square, id) => squareId === id ? turn : square))
    setWinner(calculateWinner(board))
    setTurn(prev => prev ==='x' ? 'o' : 'x')
  }

  

  return (
    <div className="App">
      {/* React components can be nested in eachother. */}
      {/* If you render the same component multiple times each will get its own state. */}
      {/* <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/> */}

      <Board board={board} handleBoard={handleBoardClick}/>
    </div>
  );
}

export default App;
