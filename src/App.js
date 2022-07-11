import Box from './components/Box';
import Input from './components/Input';
import React, { useState } from 'react';

function App() {
	const [input, setInput] = useState('');
	const [boxes, setBoxes] = useState([]);

	const getCurrentInput = () => input;

	const setBoxInput = (input) => {
		setInput(input);
	};

	const addBox = (box) => {
		setBoxes([...boxes, box]);
	};

	return (
		<div className='flex justify-center gap-5 flex-wrap'>
			<Input
				setInput={setBoxInput}
				addBox={addBox}
				currentInput={getCurrentInput}
			/>
			<Box currentBoxes={boxes} />
		</div>
	);
}

export default App;
