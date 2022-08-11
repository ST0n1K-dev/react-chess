import React from 'react';
import {BoardComponentProps} from "./Board.config";
import CellComponent from "../CellComponent";

const BoardComponent: React.FC<BoardComponentProps> = ({
	board, selectCell, selectedCell, currentPlayer
}) => {
	return (
		<div>
			<h3>Current player: {currentPlayer.color}</h3>
			<div className="board">
				{ board.cells.map((row, index) => (
					<React.Fragment key={index}>
						{ row.map((cell) => <CellComponent
							cell={cell}
							key={cell.id}
							selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
							selectCell={selectCell}
						/>)}
					</React.Fragment>
				)) }
			</div>
		</div>
	)
};

export default BoardComponent;
