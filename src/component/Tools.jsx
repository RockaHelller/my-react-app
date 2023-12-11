import React, { useState } from 'react';

export default function Tools() {
    const [color, setColor] = useState("black");
    const [fontWeight, setFontWeight] = useState("normal");

    function handleClick(event) {
        console.log("A button is clicked");
        console.log(event.target.id);
        setColor(event.target.id);
    }

    function handleFontChange(event) {
        setFontWeight(event.target.value);
    }

    return (
        <div>
            <h3 style={{ color, fontWeight }}>These are the tools!</h3>
            <button id="red" onClick={handleClick}>
                Red
            </button>
            <button id="blue" onClick={handleClick}>
                Blue
            </button>
            <br />
            Fontweight:
            <select id="fontStyles" onChange={handleFontChange}>
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="lighter">Lighter</option>
                <option value="bolder">Bolder</option>
            </select>
        </div>
    );
}
