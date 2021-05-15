import React, { useState } from 'react';

function ProgressBar (props){
    const [style, setStyle] = useState({});
    setTimeout (() => {
        const newStyle = {
            opacity: 1,
            width: `${props.percent}%`
        }
        setStyle(newStyle)
    }, 200)

    return(
        <div className="progress">
            <div className="progress-done" style={style}>
                {props.percent}%
            </div>
        </div>
    )
}

export default ProgressBar;