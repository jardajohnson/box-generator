// import { useState } from 'react';

const Box = ({ currentBoxes }) => {
	let boxes = [...currentBoxes];
	// String literal used to pass boxcolor into className in order to take advantage of Tailwindcss.
	return (
		<>
			{boxes.map((boxColor, i) => {
				return (
					<div
						key={i}
						style={{
							backgroundColor: boxColor,
							height: 196 + 'px',
							width: 196 + 'px',
						}}
					>
						&nbsp;
					</div>
				);
			})}
		</>
	);
};

export default Box;
