import React from 'react';

import { LostFiguresProps } from './LostFigures.config';
import './LostFigures.style.scss';

const LostFigures = ({ blockTitle, figures }: LostFiguresProps) => {
	return (
		<div className="LostFigures">
			<h3>{ blockTitle }</h3>
			{ figures?.map(({ name, image, id }) => (
				<div className="Figure" key={ id }>
					<p>{ name } —</p>
					<img src={ image! } alt='Figure' />
				</div>
			))}
		</div>
	);
};

export default LostFigures;
