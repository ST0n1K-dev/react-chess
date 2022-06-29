import {BaseFigure, FigureNames} from "./BaseFigure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteFigureImage from "../../assets/white-rook.png";
import blackFigureImage from "../../assets/black-rook.png";

export class Rook extends BaseFigure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.ROOK;
		this.image = this.color === Colors.WHITE ? whiteFigureImage : blackFigureImage;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (this.cell.isEmptyHorizontal(target)) {
			return true;
		}

		if (this.cell.isEmptyVertical(target)) {
			return true;
		}

		return false;
	}
}
