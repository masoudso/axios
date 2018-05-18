import React, { Component, Fragment} from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor : 'lightgrey',
            font: 'inherit',
            border: '1px solid grey',
            padding: '8px',
            cursor: 'pointer'
      };
    return(
        <div className="output">
        <Fragment>
        <form onSubmit={props.changed}>
        <input style={style} type="text" value={props.userName} />
        <br></br>
        <input type="submit" value="Search" />
      </form>
      </Fragment>
        </div>
    )
};

export default userInput;