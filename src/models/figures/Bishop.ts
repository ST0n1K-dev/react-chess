import blackFigureImage from '../../assets/black-bishop.png';
import whiteFigureImage from '../../assets/white-bishop.png';
import {BaseFigure, FigureNames} from "./BaseFigure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Bishop extends BaseFigure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.BISHOP;
		this.image = this.color === Colors.WHITE ? whiteFigureImage : blackFigureImage;
	}
}
