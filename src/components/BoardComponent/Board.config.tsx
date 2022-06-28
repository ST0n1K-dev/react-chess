import {Board} from "../../models/Board";

export interface BoardContainerProps {
	board: Board;
	setBoard: (board: Board) => void
}

export interface BoardComponentProps extends BoardContainerProps {}
