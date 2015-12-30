import React, { Component } from 'react'


export default class TodoList extends Component{

	render(){

		return (
			<div className="table-responsive">
				<table className="table table-striped">
				 	<thead>
				 		<tr>
				 			<th>id</th>
				 			<th>name</th>
				 			<th>status</th>
				 			<th>operation</th>
				 		</tr>
				 	</thead>
				 	<tbody>
				 		<tr>
				 			<td>0</td>
				 			<td>learn redux</td>
				 			<td>完成</td>
				 			<td>
				 				<a className="btn btn-success" href="#" role="button">完成</a>
				 				<a className="btn btn-danger" href="#" role="button">删除</a>
				 			</td>
				 		</tr>
				 	</tbody>
				</table>
			</div>
			
		)
	}
}