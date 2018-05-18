import React from 'react'

    const userOutput = (props) => {
        const style = {
            backgroundColor : 'white',
                font: 'inherit',
                padding: '8px',
                cursor: 'pointer',
          };
        return(
        <div className="output">
         <p> The Mini Web App!</p>
         <p>Search result: {props.userName}</p>
        </div>
        )
    };

export default userOutput;