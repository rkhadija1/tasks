import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🌸");
    function Alphabet(): void {
        if (holiday === "🌸") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🐏");
        } else if (holiday === "🐏") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🌝");
        } else if (holiday === "🌝") {
            setHoliday("🌸");
        }
    }
    function Year(): void {
        if (holiday === "🌸") {
            setHoliday("🌝");
        } else if (holiday === "🌝") {
            setHoliday("🐏");
        } else if (holiday === "🐏") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🌸");
        }
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={Alphabet}>Advance by Alphabet</Button>
            <Button onClick={Year}>Advance by Year</Button>
        </div>
    );
}
