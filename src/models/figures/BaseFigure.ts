import image from '../../assets/black-bishop.png';
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
	BASE_FIGURE = 'Base',
	KING = 'King',
	KNIGHT = 'Knight',
	PAWN = 'Pawn',
	QUEEN = 'Queen',
	ROOK = 'Rook',
	BISHOP = 'Bishop'
}

export class BaseFigure {
	color: Colors;
	image: typeof image | null;
	cell: Cell;
	name: FigureNames;
	id: number;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.image = null;
		this.name = FigureNames.BASE_FIGURE;
		this.id = Math.random();
	}

	canMove(target: Cell): boolean {
		return true;
	}

	moveFigure(target: Cell) {}
}
