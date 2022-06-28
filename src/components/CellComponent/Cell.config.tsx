import {Cell} from "../../models/Cell";

export interface CellContainerProps {
	cell: Cell
}

export interface CellComponentProps extends CellContainerProps {}
