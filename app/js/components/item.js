import React , { Component } from "react"


export default class Item extends Component{
    changeStatus(e){
        var item = this.refs.item,
            id = item.getAttribute('data-id')|0;
        console.log( id , 'click id ')
        if( id!==undefined ){
           //出发action
            this.props.doneTodo(id);
        }
    }
    removeItem(){
        var item = this.refs.item,
            id = item.getAttribute('data-id')|0;
        if( id!==undefined ){
            //出发action
            this.props.removeTodo(id)
        }
    }
    render(){
        let { id , text, status } = this.props;
        return (

            <tr ref='item' data-id={id}>
                <td>{id}</td>
                <td>{ text }</td>
                <td>{ status?"完成":"未完成"}</td>
                <td>
                    <a className={status?"hidden  btn btn-success":"btn btn-success"} href="javascript:;" role="button"  onClick={(e)=>this.changeStatus(e)}>{"完成"}</a>
                    <a className="btn btn-danger" href="javascript:;" role="button" onClick={(e)=>this.removeItem()}>删除</a>
                </td>
            </tr>


        )
    }
}
