import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Quotecontext from "./utils/context"
import { Provider } from "react-redux"
import store from "./utils/store"
import {useContext} from "react"
import App from "./app"

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)


root.render
(
<BrowserRouter>
<Provider store={store}>
<App/>
</Provider>
</BrowserRouter>
,)
