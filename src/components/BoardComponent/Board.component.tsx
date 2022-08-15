import React from 'react';
import {BoardComponentProps} from "./Board.config";
import CellComponent from "../CellComponent";
import LostFigures from "../LostFigures";

const BoardComponent: React.FC<BoardComponentProps> = ({
	board, selectCell, selectedCell, currentPlayer
}) => {
	return (
		<div>
			<h3>Current player: {currentPlayer.color}</h3>
			<div className="boardWrapper">
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
				<div className="lost">
					<LostFigures blockTitle="Lost black" figures={board.lostBlackFigures} />
					<LostFigures blockTitle="Lost white" figures={board.lostWhiteFigures} />
				</div>
			</div>
		</div>
	)
};

export default BoardComponent;
