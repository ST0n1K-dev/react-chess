import React, {useEffect, useState} from 'react';
import './App.scss';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";

function App() {
	const [board, setBoard] = useState(new Board());

	useEffect(() => {
		startNewGame();
		return () => {};
	}, []);


	const startNewGame = () => {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}

	return (
		<div className="App">
			<BoardComponent board={board} setBoard={setBoard}/>
		</div>
	);
}

export default App;
