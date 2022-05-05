import React, { useState } from 'react';

import { Todo } from './components';

const TODOS_DATA = [
	{ id: 1, text: 'Learn React' },
	{ id: 2, text: 'Learn Next' },
	{ id: 3, text: 'Learn Code' },
	{ id: 4, text: 'Learn Ever' },
	{ id: 5, text: 'Learn Learn' },
	{ id: 6, text: 'Learn React Again' },
	{ id: 7, text: 'Learn Next Again' },
	{ id: 8, text: 'Learn Others Things' },
	{ id: 9, text: 'Learn React Native' },
	{ id: 10, text: 'For All Your Live Continue Learning' },
];

function App() {
	const [todos, setTodos] = useState(TODOS_DATA);

	function deleteTodoHandler(id) {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h1>My Todos</h1>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
				{todos.map(({ id, text }) => (
					<Todo id={id} text={text} onDeleteHandler={deleteTodoHandler} />
				))}
			</div>
		</div>
	);
}

export default App;
