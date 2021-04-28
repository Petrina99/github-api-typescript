import React, { useState } from 'react';

type Props = {
    handleInput: Function;
}

export const UserInput = (props: Props) => {
    
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setInputValue("");
        props.handleInput(inputValue);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button className="mirko" type="submit" />
            </form>
        </>        
    )
}