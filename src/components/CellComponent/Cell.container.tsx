import React from 'react';
import CellComponent from "./Cell.component";
import {CellContainerProps} from "./Cell.config";

const CellContainer: React.FC<CellContainerProps> = (props) => {
	const { cell, selected, selectCell } = props;

	const containerProps = () => {
		return {
			cell,
			selected
		};
	}

	const containerFunctions = {
		selectCell
	}

	return (
		<CellComponent
			{ ...containerProps() }
			{ ...containerFunctions }
		/>
	)
};

export default CellContainer;
