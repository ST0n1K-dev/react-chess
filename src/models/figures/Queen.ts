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
}
