import {BaseFigure, FigureNames} from "./BaseFigure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteFigureImage from "../../assets/white-knight.png";
import blackFigureImage from "../../assets/black-knight.png";

export class Knight extends BaseFigure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.KNIGHT;
		this.image = this.color === Colors.WHITE ? whiteFigureImage : blackFigureImage;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		const dx = Math.abs(this.cell.x - target.x);
		const dy = Math.abs(this.cell.y - target.y);

		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
	}
}
