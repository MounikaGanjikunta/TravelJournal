import React from "react";


function Card(props){
    return (<div className = "div--card">
        <img src ={require(`../Images/${props.image}`)} className= "image--card"/>
        {/* <img src = {props.imageUrl}/> */}
        <div className = "innerdiv--card">
        
        <div className = 'details--card'>
        <img src = {require("../Images/Location.png")} style={{ marginRight: '10px' }} width = "10px"/>
        <h3>{props.location}</h3>
        <a href = {props.URL} className = "link--card">View on Google Maps</a>
        </div>
        <h1 style={{ marginTop: '3px' }}>{props.title}</h1>
        <h3>{props.startdate} - {props.enddate}</h3>
        <p className = "Para--card"> {props.text}
        </p>
        </div>
        </div>)
}

export default Card