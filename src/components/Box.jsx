// import { useState } from 'react';

const Box = ({ color }) => {
	// String literal used to pass color into className in order to take advantage of Tailwindcss.
	return <div className={`h-48 w-48 bg-${color}-500`}>&nbsp;</div>;
};

export default Box;
