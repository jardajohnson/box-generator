import Box from './components/Box';
import Input from './components/Input';
import React, { useState } from 'react';

function App() {
	const [input, setInput] = useState('');
	const [boxes, setBoxes] = useState([]);

	const getCurrentInput = () => input;
	const getCurrentBoxes = () => boxes;

	const setBoxInput = (input) => {
		setInput(input);
	};

	const addBox = (box) => {
		setBoxes([...boxes, box]);
	};

	return (
		<div className='flex justify-start gap-5'>
			<Input
				setInput={setBoxInput}
				addBox={addBox}
				currentInput={getCurrentInput}
			/>
			<Box currentBoxes={getCurrentBoxes} />
		</div>
	);
}

export default App;
