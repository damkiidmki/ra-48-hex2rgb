import React, { useState } from "react"

function ConvertColor(color = '') {
    if (color.length < 7) {
        return 'Напишите цвет'
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Ошибка';
}

function Converter() {
    const [input, setInput] = useState({
        name: '',
        color: ConvertColor()
    })  

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const color = ConvertColor(value);
        setInput(prevInput => ({...prevInput, [name]: value, color: color }))
    }

    return (
        <form>
            <div className="box" style={{backgroundColor: input.color}}>
                    <input
                        onChange={handleChange}
                        className="input-color"
                        placeholder="#000000"
                        name='name'
                        type="text"
                        value={input.name}
                    />
                <div className="color">
                    <div>{input.color}</div>
                </div>
            </div>
        </form>
    )
}

export default Converter
