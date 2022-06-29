import React, {useEffect, useState} from 'react';
import BoardComponent from "./Board.component";
import {BoardContainerProps} from "./Board.config";
import {Cell} from "../../models/Cell";

const BoardContainer: React.FC<BoardContainerProps> = ({ board, setBoard}) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	useEffect(() => {
		highlightAvailable();
	}, [selectedCell]);


	const selectCell = (cell: Cell) => {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
			refreshBoard();
		} else {
			setSelectedCell(cell);
		}
	}

	const highlightAvailable = () => {
		board.highlightAvailable(selectedCell);
		refreshBoard();
	}

	const refreshBoard = () => {
		const newBoard = board.getBoardCopy();
		setBoard(newBoard);
	}

	const containerProps = () => {
		return {
			board,
			selectedCell
		};
	}

	const containerFunctions = {
		setBoard,
		selectCell
	}

	return (
		<BoardComponent
			{ ...containerProps() }
			{ ...containerFunctions }
		/>
	)
};

export default BoardContainer;
