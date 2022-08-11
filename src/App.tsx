import React, {useEffect, useState} from 'react';
import './App.scss';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";

function App() {
	const [board, setBoard] = useState(new Board());
	const [playerWhite, setPlayerWhite] = useState(new Player(Colors.WHITE));
	const [playerBlack, setPlayerBlack] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player>(playerWhite);

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

	const swapPlayer = () => {
		setCurrentPlayer(currentPlayer.color === Colors.BLACK ? playerWhite : playerBlack);
	}

	return (
		<div className="App">
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
		</div>
	);
}

export default App;
