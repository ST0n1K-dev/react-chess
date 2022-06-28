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
}
