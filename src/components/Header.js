import './Header.css';

import { useSelector } from 'react-redux'

const Header = () => {

	const todos = useSelector(state => state.todos.todoList);	
	let done = todos.filter(todo => todo.done === true );	

	return (
		<header className="header" >
			<h1>Todo List</h1>
			<div className="counter">
				<span>{done.length}/{todos.length}</span> Done
			</div>
		</header>
	)
}

export default Header