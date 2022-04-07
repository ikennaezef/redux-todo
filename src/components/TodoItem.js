import { setDone, deleteTodo } from '../features/todos';
import { useDispatch } from 'react-redux';

import './TodoItem.css';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleToggle = (e) => {
		if (!e.target.classList.contains('delete__btn')) {
			dispatch(setDone(todo.id));
		}
	}

	const handleDelete =() => {
		dispatch(deleteTodo(todo.id));
	}

	return (
		<div className={todo.done ? "todo__item todo__done" : "todo__item"} onClick={handleToggle} >
			<div className="todo__main">{ todo.name }</div>
			<button className="delete__btn" onClick={handleDelete} >X</button>
		</div>
	)
}

export default TodoItem