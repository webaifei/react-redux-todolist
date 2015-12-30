import { render } from "react-dom"
import React from "react"
import Head from "./components/head"
import Form from "./components/form"
import TodoList from "./components/todoList"
import Footer from "./components/footer"


render(
	<div>
		<Head/>
		<Form/>
		<TodoList/>
		<Footer/>
	</div>,
	document.getElementById('app')
)