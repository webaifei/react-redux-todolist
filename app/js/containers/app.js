import React , { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Head from "../components/head"
import Form from "../components/form"
import TodoList from "../components/todoList"
import Footer from "../components/footer"
import { ADD_TODO, DONE_TODO,REMOVE_TODO, removeTodo, SET_VISIBILITY, addTodo, doneTodo, setVisibility , VISIBILITY_FILTERS } from "../actions/action"
import * as actionCreators from "../actions/action"

class App extends Component{

	render (){
		const { addTodo,doneTodo,removeTodo , setVisibility } = this.props.actions;
		console.log( this.props, 'root props')
		const { dispatch, visibleTodos, visibileType } = this.props;
		return (
			<div>
				<Head/>
				<Form onSubmit={text=>addTodo(text)}/>
				<TodoList todos={visibleTodos} doneTodo={(id)=>doneTodo(id)} removeTodo={(id)=>removeTodo(id)}/>
				<Footer setVisibility={showType=>setVisibility(showType)} />
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
/**
 * 一个函数
 * 用来设置你想要暴露给子组件 state中的属性（部分数据）
 * @param state
 * @returns {{visibleTodos: *, visibileType: (*|visibileType)}}
 */
function select ( state ){
	console.log( state, 'connect 中的 state')
	return {
		visibleTodos: selectTodos( state.todos, state.visibileType ),
		visibileType: state.visibileType
	}
}
//mapDispatchToProps
function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}
//connect 将app和store结合起来的东东
//现在只需要知道 将一个函数传递进去 返回的是一个暴露给app的对象
//connect 目前我们只需要知道需要传入两个参数
// 一个是：mapStateToProps
//是一个函数 返回一个纯净的js对象
//内部其实是在dispatch一个action之后，把修改的state中的对应的部分重新赋值给子组件的props 从而引起子组件的自动渲染
App = connect(select, mapDispatchToProps)(App);

export { App }