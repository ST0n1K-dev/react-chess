/* eslint-disable no-mixed-operators */
import {BaseFigure, FigureNames} from "./BaseFigure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteFigureImage from "../../assets/white-pawn.png";
import blackFigureImage from "../../assets/black-pawn.png";

export class Pawn extends BaseFigure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.PAWN;
		this.image = this.color === Colors.WHITE ? whiteFigureImage : blackFigureImage;
	}

	isFirstStep: boolean = true;

	canMove(target:Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
		const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

		if ((target.y === this.cell.y + direction || this.isFirstStep
			&& (target.y === this.cell.y + firstStepDirection))
		&& target.x === this.cell.x
		&& this.cell.board.getCell(target.x, target.y).isEmpty()) {
			return true;
		}

		return target.y === this.cell.y + direction
			&& (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
			&& this.cell.isEnemy(target);

	}

	moveFigure(target: Cell) {
		super.moveFigure(target);
		this.isFirstStep = false;
	}
}
