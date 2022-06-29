import React from 'react';
import {BoardComponentProps} from "./Board.config";
import CellComponent from "../CellComponent";

const BoardComponent: React.FC<BoardComponentProps> = ({
	board, selectCell, selectedCell
}) => {
	return (
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
	)
};

export default BoardComponent;
