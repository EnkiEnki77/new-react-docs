
import './App.css';
import MyButton from './components/MyButton';
import {useState} from 'react'
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

  const [board, setBoard] = useState(Array.from("         "))

  const handleBoardClick = (squareId) => {
    console.log(board)
    setBoard(prev => prev.map((square, id) => squareId === id ? 'x' : square))
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
