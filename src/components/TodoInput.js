import { useState } from 'react'
import './TodoInput.css';

import { addTodo } from '../features/todos';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
	const dispatch = useDispatch();

	const [addingTodo, setAddingTodo] = useState(false);
	const [todo, setTodo] = useState("");

	const handleAdd = () => {
		if (todo!=="") {
			dispatch(addTodo({
				name: todo,
				id: Date.now(),
				done: false
			}));
			setTodo("");
			setAddingTodo(false);
		}
	}

	return (
		<div className="input__container">
			{
				addingTodo ? (
						<div className="form-control" >
							<input type="text" className="todo__input" placeholder="Add a todo" value={todo} onChange={e => setTodo(e.target.value)} autoFocus />
							<button className="add__btn" onClick={handleAdd} >Add</button>
						</div>
					) : (
						<button className="start__adding__btn" onClick={()=> setAddingTodo(true)} >+</button>
					)
			}
		</div>
	)
}

export default TodoInput