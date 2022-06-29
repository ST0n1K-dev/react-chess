import {Board} from "../../models/Board";
import {Cell} from "../../models/Cell";

export interface BoardContainerProps {
	board: Board;
	setBoard: (board: Board) => void
}

export interface BoardComponentProps extends BoardContainerProps {
	selectedCell: Cell | null,
	selectCell: (cell: Cell) => void;
}
