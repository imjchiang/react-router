import React, {Component} from "react";

class Ortho extends Component
{
    render()
    {
        const allBraces = this.props.braces.map((b, idx) =>
        {
            return <li key={idx}>{b}</li>
        });

        return(
            <div>
                <h1>We do Braces too!</h1>
                {allBraces}
            </div>
        );
    }
}

export default Ortho;