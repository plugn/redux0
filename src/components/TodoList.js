import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoRemove }) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onTodoRemove={() => onTodoRemove(todo.id)}
				onClick={() => onTodoClick(todo.id)}
			/>
		)}
	</ul>
)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired,
	onTodoRemove: PropTypes.func.isRequired
}

export default TodoList
