import React from 'react';
import CellComponent from "./Cell.component";
import {CellContainerProps} from "./Cell.config";

const CellContainer: React.FC<CellContainerProps> = ({ cell }) => {
	const containerProps = () => {
		return {
			cell
		};
	}

	const containerFunctions = {}

	return (
		<CellComponent
			{ ...containerProps() }
			{ ...containerFunctions }
		/>
	)
};

export default CellContainer;
