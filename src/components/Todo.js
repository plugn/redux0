import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {toggleTodo, removeTodo} from '../actions'

let Todo = ({ completed, text, id, dispatch }) => (
	<li
		onClick={() => { dispatch(toggleTodo(id)) }}
	>
		<span style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}>{text}
		</span>
		{' '}
		[<span onClick={() => { dispatch(removeTodo(id)) }} style={{cursor: 'pointer'}}> x </span>] :{id}
	</li>
)

Todo.propTypes = {
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

Todo = connect()(Todo)

export default Todo