import React,{ Component } from "react"
/**
 * 这种继承的写法 在事件函数中的this会和createClass 的不同
 */
export default class Table extends Component{
	addItem(e){
		console.log( this )
		var input = this.refs.input,
			text = input.value.trim();

		if( text.length ){
			this.props.onSubmit(text)
		}
	}

	render(){
	
		return (
			<div className="row col-lg-12">
			  <div className="col-lg-6">
			    <div className="input-group">
			      <input ref='input' type="text" className="form-control" placeholder="add task here..."/>
			      <span className="input-group-btn">
			        <button className="btn btn-default" onClick={(e)=>this.addItem(e) } type="button">ADD</button>
			      </span>
			    </div>
			  </div>
			</div>


		)
	}
	
}