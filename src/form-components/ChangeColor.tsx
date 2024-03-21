import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label="Red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-white"
                label="White"
                value="white"
                checked={color === "white"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label="Green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-black"
                label="Black"
                value="black"
                checked={color === "black"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-pruple"
                label="Purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label="Orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label="Blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-cyan"
                label="Cyan"
                value="cyan"
                checked={color === "cyan"}
            />

            <div>
                <span
                    style={{
                        backgroundColor: color
                    }}
                    data-testid="colored-box"
                >
                    {" "}
                    Your current color is {color}
                </span>
            </div>
        </div>
    );
}
