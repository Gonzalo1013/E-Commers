//1) Necesitamos la variable React en scope
import React from "react"

//2) Necesitamos la variable ReactDom en scope
import ReactDom from "react-dom"

//3) Necesitamos una aplicacion de React
import App from "./App"

//4) Necesitamos dibujar la aplicacion en el Dom

ReactDom.render(<App/> , document.getElementById("root"))