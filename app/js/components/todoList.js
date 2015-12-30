import React, { Component } from 'react'


export default class TodoList extends Component{

	render(){
		console.log(this.props)
		let {todos} = this.props;
		return (
			<div className="table-responsive">
				<p></p>
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
				 		{
				 			todos.map(function ( item , index ){
				 				return (
				 					<tr>
				 						<td>{index}</td>
				 						<td>{ item.text }</td>
				 						<td>{ item.status?"完成":"未完成"}</td>
				 						<td>
				 							<a className="btn btn-success" href="#" role="button">{ item.status?"未完成":"完成"}</a>
				 							<a className="btn btn-danger" href="#" role="button">删除</a>
				 						</td>
				 					</tr>
				 				)
				 			})
				 		}
				 	</tbody>
				</table>
			</div>
			
		)
	}
}