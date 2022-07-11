import React, { useState } from 'react';

const Input = ({ setInput, addBox, currentInput }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='border rounded'
				onChange={(e) => setInput(e.target.value)}
				name='color'
			/>
			<button type='submit'>Add Box</button>
		</form>
	);
};

export default Input;
