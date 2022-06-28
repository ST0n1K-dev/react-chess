import {Colors} from "./Colors";
import {BaseFigure} from "./figures/BaseFigure";
import {Board} from "./Board";

export class Cell {
	readonly x: number;
	readonly y: number;
	readonly color: Colors;
	figure: BaseFigure | null;
	board: Board;
	available: boolean;
	id: number;

	constructor(board: Board, x: number, y: number, color: Colors, figure: BaseFigure | null) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.figure = figure;
		this.board = board;
		this.available = false;
		this.id = Math.random();
	}
}
