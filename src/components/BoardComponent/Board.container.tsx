import React from 'react';
import BoardComponent from "./Board.component";
import {BoardContainerProps} from "./Board.config";

const BoardContainer: React.FC<BoardContainerProps> = ({ board, setBoard}) => {
	const containerProps = () => {
		return {
			board
		};
	}

	const containerFunctions = {
		setBoard
	}

	return (
		<BoardComponent
			{ ...containerProps() }
			{ ...containerFunctions }
		/>
	)
};

export default BoardContainer;
