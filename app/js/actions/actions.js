/**
 * action 中定义都是一些普通的javascript对象
 * 主要是定义了 使用什么去做什么事情
 */

/**
 * actions 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 其他的常量
 */
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_DONE: 'SHOW_DONE',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/**
 * action 创建函数
 * 
 */
export function addTodo( text ){
	return {
		type: ADD_TODO,
		text
	}
}

export function completeTodo( id ){
	return {
		type: DONE_TODO,
		id
	}
}

export function setVisibilityFilter( filter ){
	return {
		type: SET_VISIBILITY_FILTER,
		filter

	}
}