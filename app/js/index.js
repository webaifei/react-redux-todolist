/**
 * 创建store 链接store和react组件
 */

import { render } from "react-dom"
import { createStore } from 'redux'
import { Provider } from "react-redux"
import React from "react"
import {App} from "./containers/app"

import { rootReducer } from "./reducers/index"

/**
 * store 包含了 getState、dispatch、subscribe
 * 使用provider 把store中的属性都传递到app中
 *
 *
 */
var store = createStore( rootReducer );
render(
	<Provider store={ store }>
		<div>
			<App/>
		</div>
	</Provider>,
	document.getElementById('app')
)