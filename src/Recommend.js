import React, {Component} from "react";

class Recommend extends Component
{
    render()
    {
        return(
            <div>
                <h1>Recommendation Number: {this.props.match.params.id}</h1>
                <p>We Recommend {this.props.braces[Math.floor(Math.random()*5)]} Braces</p>
            </div>
        )
    }
}

export default Recommend;