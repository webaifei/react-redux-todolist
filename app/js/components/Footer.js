import React , { Component } from "react"
import { VISIBILITY_FILTERS } from "../actions/action"
const { SHOW_ALL, SHOW_DONE, SHOW_UNDONE }  = VISIBILITY_FILTERS
export default class Footer extends Component{
	showTodos(e){
		var type = e.target.getAttribute('data-type');
		//console.log( e.target, 'selected type')
		this.props.setVisibility(type)
	}
	render(){

		return (
			<div className="well well-sm">
				<span data-type={SHOW_ALL} className="label label-primary" onClick={(e)=>this.showTodos(e)}>所有</span>
				<span data-type={ SHOW_DONE } className="label label-success" onClick={(e)=>this.showTodos(e)}>已经完成</span>
				<span data-type={ SHOW_UNDONE } className="label label-warning" onClick={(e)=>this.showTodos(e)}>未完成</span>
			</div>

		)
	}
}