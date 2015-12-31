import { combineReducers } from 'redux'
import { ADD_TODO, DONE_TODO, REMOVE_TODO, SET_VISIBILITY, addTodo, doneTodo,removeTodo, setVisibility , VISIBILITY_FILTERS } from "../actions/action"

const { SHOW_ALL } = VISIBILITY_FILTERS
/**
 * todo reducer
 * store.dispatch action之後 会调用所有的reducers 来判断是什么type的action 从而更新不同部分的state
 *
 */

function todos( state = [], action ){
	console.log( state, 'cur state')
	switch( action.type ){
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					status: false
				}

			];
		//更新的时候分成了三个部分 把index之前和之后的部分截取出来 
		//
		case DONE_TODO:
			console.log(action , 'done action')
			return [
				...state.slice( 0, action.id ),
				Object.assign({}, {
					status: true,
					text: state[action.id].text
				}),
				...state.slice(action.id+1)



			];
		case REMOVE_TODO:
			var newState = state.concat();
				newState.splice(action.id,1);
			return [
				...newState
			]
		default:
			return state;

	}
}

/**
 * 显示过滤操作
 */

function visibileType( state= SHOW_ALL, action ){
	console.log(action, 'action type')
	switch( action.type ){
		case SET_VISIBILITY:
			return action.filter;
		default:
			return state;

	}
}
//最终的store的样子就是这个 注意 在app中使用props 时候 也需要使用对应的key
//
var rootReducer = combineReducers({
	todos,
	visibileType
})

export { rootReducer }