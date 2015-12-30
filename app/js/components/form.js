import React,{ Component } from "react"
export default class Table extends Component{


	render(){

		return (
			<div className="row col-lg-12">
			  <div className="col-lg-6">
			    <div className="input-group">
			      <input type="text" className="form-control" placeholder="add task here..."/>
			      <span className="input-group-btn">
			        <button className="btn btn-default" type="button">ADD</button>
			      </span>
			    </div>
			  </div>
			</div>


		)
	}
}