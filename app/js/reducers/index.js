import { combineReducers } from "redux"
/**
 * 在reducers中
 * 是把action 对应的操作 接收过来 从而进行对应的操作 返回新的state
 * 
 */
import {
	ADD_TODO,
	DONE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters

} from "../actions/actions"

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter( state = SHOW_ALL, action ){
	switch( action.type ){
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

/**
 * 和todo 相关的数据操作
 * @param  {Array}  state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
function todos( state = [], action ){
	//console.log( action, 'acion state')
	switch( action.type ){
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			];
		case DONE_TODO:
			return [
				...state.slice(0,action.id),
				Object.assign({}, state[action.id], {
					completed:true
				}),
				...state.slice(action.id + 1)
			];

		default:
			return state;

	}
}


const todoReducers = combineReducers({
	visibilityFilter,
	todos
})

export { todoReducers };
