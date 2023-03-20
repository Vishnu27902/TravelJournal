import React from "react";

export default function Body(props){
    let status="";
    if(props.rating>8)
    {
        status="Awesome";
    }
    else if(props.rating<9 && props.rating<6){
        status="Enjoyed so Much";
    }
    else{
        status="Nice Experience";
    }
    return(
        <div id="body-container">
            <div id="body--element">
                <img id="body--element-image" src={`img/${props.img}`} alt="#"/>
                <h2 id="body--element-title">
                    {props.title}
                </h2>
                <p id="body--element-description">
                    {props.description}
                </p>
                <div id="body--element-rating">
                    {props.rating}
                </div>
                <div id="body--element-status">
                    {props.rating && <p>Status : {status}</p>}
                </div>
            </div>
        </div>
    )
}