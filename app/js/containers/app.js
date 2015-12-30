import React , { Component } from "react"
import { connect } from "react-redux"
import Head from "../components/head"
import Form from "../components/form"
import TodoList from "../components/todoList"
import Footer from "../components/footer"
import { ADD_TODO, DONE_TODO, SET_VISIBILITY, addTodo, doneTodo, setVisibility , VISIBILITY_FILTERS } from "../actions/action"


class App extends Component{

	render (){
		console.log( this.props, 'root props')
		const { dispatch, visibleTodos, visibileType } = this.props;
		return (
			<div>
				<Head/>
				<Form onSubmit={text=>dispatch(addTodo(text))}/>
				<TodoList todos={visibleTodos}/>
				<Footer/>
			</div>
		)
	}
}
/**
 * 
 */
function selectTodos (todos, filter){
	switch( filter ){
		case VISIBILITY_FILTERS.SHOW_ALL:
			return todos;
		case VISIBILITY_FILTERS.SHOW_DONE:
			return todos.filter( todo => todo.status );
		case VISIBILITY_FILTERS.SHOW_UNDONE:
			return todos.filter( todo => !todo.status )
	}
}

function select ( state ){
	return {
		visibleTodos: selectTodos( state.todos, state.visibileType ),
		visibileType: state.visibileType
	}
}
//connect 将app和store结合起来的东东
//现在只需要知道 将一个函数传递进去 返回的是一个暴露给app的对象
export default connect(select)(App);