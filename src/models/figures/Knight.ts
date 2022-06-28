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
}
