import React from 'react';
import {CellComponentProps} from "./Cell.config";
import classNames from "classnames";

const CellComponent: React.FC<CellComponentProps> = ({ cell, selected, selectCell }) => {
	return (
		<div className={classNames('cell', cell.color, {
			selected: selected,
			attacking: cell.available && cell.figure
		})}
		onClick={() => selectCell(cell)}>
			{ cell.available && !cell.figure && <div className="available" />}
			{ cell.figure?.image && <img src={cell.figure.image} alt="Figure" />}
		</div>
	)
}

export default CellComponent;
