/**
 * 创建store 链接store和react组件
 */

import { render } from "react-dom"
import { createStore } from 'redux'
import { Provider } from "react-redux"
import React from "react"
import App from "./containers/app"

import { rootReducer } from "./reducers/index"

var store = createStore( rootReducer );
render(
	<Provider store={ store }>
		<App/>
	</Provider>,
	document.getElementById('app')
)