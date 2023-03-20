import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import content from "./content";

export default function App(){
    const arr=content.map(data =>
        <Body
        {...data}
        />
    );
    return(
        <div>
            <Navbar/>
            {arr}
        </div>
    )
}
