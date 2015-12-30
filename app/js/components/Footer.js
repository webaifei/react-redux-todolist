import React , { Component } from "react"

export default class Footer extends Component{

	render(){

		return (
			<div className="well well-sm">
				<span className="label label-primary">所有</span>
				<span className="label label-success">已经完成</span>
				<span className="label label-warning">未完成</span>
			</div>

		)
	}
}