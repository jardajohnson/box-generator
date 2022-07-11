// import { useState } from 'react';

const Box = ({ currentBoxes }) => {
	// String literal used to pass color into className in order to take advantage of Tailwindcss.
	return currentBoxes.map((boxColor) => (
		<div className={`h-48 w-48 bg-${boxColor}-500`}>&nbsp;</div>
	));
};

export default Box;
