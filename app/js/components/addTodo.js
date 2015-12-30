import React ,{ Component, PropTypes } from 'react'


export default  class AddTodo extends Component {
	render(){
		return (
			<div>
		        <input type='text' ref='input' />
		        <button onClick={(e) => this.handleClick(e)}>
		          Add
		        </button>
		      </div>

		)
	}

	handleClick(e){
		const node = this.refs.input
		const text = node.value.trim()
		console.log( this.props)
		this.props.onAddClick(text);
		node.value = ''


	}
}

//原型上添加方法
AddTodo.propTypes = {
	onAddClick:PropTypes.func.isRequired
}