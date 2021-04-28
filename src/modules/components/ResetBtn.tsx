import React from 'react';

interface Props {
    resetState: Function;
}

export const ResetBtn:React.FC<Props> = (props) => {

    const handleClick = () => {
        props.resetState();
    }

    return(
        <div>
            <button onClick={handleClick}>Reset</button>
        </div>
    )
}