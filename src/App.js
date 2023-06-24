import React from "react"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import data from "./data.js"



function App(){

    const cards = data.map(function(item){
        return <Card 
        image = {item.image}
        title = {item.title}
        startdate = {item.startDate}
        enddate = {item.endDate}
        text = {item.description}
        location = {item.location}
        URL = {item.googleMapsUrl}
        />
    })



    return (<div>
        <Navbar/>
        {cards}
        </div>)
}

export default App

