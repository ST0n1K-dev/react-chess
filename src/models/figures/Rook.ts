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
}
