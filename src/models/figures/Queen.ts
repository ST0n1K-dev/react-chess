import {BaseFigure, FigureNames} from "./BaseFigure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteFigureImage from "../../assets/white-queen.png";
import blackFigureImage from "../../assets/black-queen.png";

export class Queen extends BaseFigure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.QUEEN;
		this.image = this.color === Colors.WHITE ? whiteFigureImage : blackFigureImage;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (this.cell.isEmptyVertical(target)) {
			return true;
		}

		if (this.cell.isEmptyHorizontal(target)) {
			return true;
		}

		if (this.cell.isEmptyDiagonal(target)) {
			return true;
		}

		return false;
	}
}
