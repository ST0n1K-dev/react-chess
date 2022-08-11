import {BaseFigure, FigureNames} from "./BaseFigure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteFigureImage from "../../assets/white-king.png";
import blackFigureImage from "../../assets/black-king.png";

export class King extends BaseFigure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.KING;
		this.image = this.color === Colors.WHITE ? whiteFigureImage : blackFigureImage;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (((this.cell.x === target.x && Math.abs(this.cell.y - target.y) === 1)
			|| (this.cell.y === target.y && Math.abs(this.cell.x - target.x) === 1)
			|| (Math.abs(this.cell.x - target.x) === 1 && Math.abs(this.cell.y - target.y) === 1))
			&& this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true
		}

		if (((this.cell.x === target.x && Math.abs(this.cell.y - target.y) === 1)
			|| (this.cell.y === target.y && Math.abs(this.cell.x - target.x) === 1)
			|| (Math.abs(this.cell.x - target.x) === 1 && Math.abs(this.cell.y - target.y) === 1))
			&& this.cell.isEnemy(target)
		) {
			return true;
		}

		return false;
	}
}
