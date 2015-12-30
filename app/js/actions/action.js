/**
 * actions
 * action部分最终是要产出一些纯净js对象的 
 * 这里放置所有的操作
 * 增删改查
 */


export const ADD_TODO = 'ADD_TODO'
export const DONE_TODO = 'DONE_TODO'
export const SET_VISIBILITY = 'SET_VISIBILITY'
export const VISIBILITY_FILTERS = {
	SHOW_ALL:'SHOW_ALL',
	SHOW_DONE:"SHOW_DONE",
	SHOW_UNDONE:'SHOW_UNDONE'
}


export function addTodo( text ){
	return {
		type: ADD_TODO,
		text: text
	}
}


export function doneTodo( id ){
	return {
		type: DONE_TODO,
		id: id
	}
} 


export function setVisibility( showType ){
	return {
		type: SET_VISIBILITY,
		showType
	}
}

