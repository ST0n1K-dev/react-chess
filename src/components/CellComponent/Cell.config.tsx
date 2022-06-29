import {Cell} from "../../models/Cell";

export interface CellContainerProps {
	cell: Cell;
	selected: boolean;
	selectCell: (cell: Cell) => void;
}

export interface CellComponentProps extends CellContainerProps {}
