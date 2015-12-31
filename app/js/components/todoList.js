import React, { createClass } from 'react'
import Item from "./item"

export default createClass({

	render:function(){
		console.log(this.props)
		let {todos, doneTodo, removeTodo} = this.props;
		var that = this;
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
									<Item key={index} id={index} {...item} doneTodo={doneTodo} removeTodo={removeTodo}/>
				 				)
				 			})
				 		}
				 	</tbody>
				</table>
			</div>
			
		)
	}
})