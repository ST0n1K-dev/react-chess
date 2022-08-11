import {Board} from "../../models/Board";
import {Cell} from "../../models/Cell";
import {Player} from "../../models/Player";

export interface BoardContainerProps {
	board: Board;
	setBoard: (board: Board) => void
	swapPlayer: () => void
	currentPlayer: Player
}

export interface BoardComponentProps {
	board: Board;
	setBoard: (board: Board) => void
	selectedCell: Cell | null,
	selectCell: (cell: Cell) => void;
	currentPlayer: Player
}
