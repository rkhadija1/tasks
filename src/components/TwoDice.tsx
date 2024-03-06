import { spawn } from "child_process";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [firstDice, setFirstDice] = useState<number>(0);
    const [secondDice, setSecondDice] = useState<number>(1);

    function rollLeft(): void {
        setFirstDice(d6());
    }
    function rollRight(): void {
        setSecondDice(d6());
    }
    /*function renderResult(): JSX.Element | null {
        firstDice === 1 && secondDice === 1 ? <div>"Lose"</div> : firstDice === secondDice <div>"Win"</div> : null;
    }*/
    return (
        <div>
            <span data-testid="left-die">{firstDice}</span>{" "}
            <span data-testid="right-die">{secondDice}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {firstDice === 1 && secondDice === 1 ? (
                <span>Lose</span>
            ) : firstDice === secondDice ? (
                <span> Win</span>
            ) : null}
        </div>
    );
}
