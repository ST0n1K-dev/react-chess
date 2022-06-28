import React from 'react';
import {CellComponentProps} from "./Cell.config";
import classNames from "classnames";

const CellComponent: React.FC<CellComponentProps> = ({ cell }) => {
	return (
		<div className={classNames('cell', cell.color)}>
			{ cell.figure?.image && <img src={cell.figure.image} alt="Figure" />}
		</div>
	)
}

export default CellComponent;
