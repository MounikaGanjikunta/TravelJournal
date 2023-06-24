import React from "react"
import logo from "../Images/logo.jpeg"

function Navbar(){
    return (<nav>
        <img src = {logo} className = "image-nav"/>
        <h1>my travel journal</h1>
    </nav>)

}

export default Navbar