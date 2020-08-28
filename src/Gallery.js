import React, {Component} from "react";
import smile from "./smile.jpg"

class Gallery extends Component
{
    render()
    {
        return(
            <div>
                <h1>Gallery</h1>
                <img src={smile} alt="Smile"/>
            </div>
        )
    }
}

export default Gallery;