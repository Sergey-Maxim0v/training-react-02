import React, {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0)

	function increment() {
		return setCount(count + 1)
	}

	function decriment() {
		return setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decriment}>Decriment</button>
		</div>
	);
};

export default Counter;
