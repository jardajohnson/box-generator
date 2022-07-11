const Input = ({ setInput, addBox }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox(e.target.color.value);
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
