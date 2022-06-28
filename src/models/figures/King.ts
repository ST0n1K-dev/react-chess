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
}
