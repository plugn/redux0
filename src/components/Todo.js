import React, { PropTypes } from 'react'

const Todo = ({ onClick, onTodoRemove, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text} [<span onClick={onTodoRemove} style={{cursor: 'pointer'}}> x </span>]
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	onTodoRemove: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo