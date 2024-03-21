import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };
    const checkAnswer = () => {
        return answer.trim().toLowerCase() ===
            expectedAnswer.trim().toLowerCase()
            ? "✔️"
            : "❌";
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={answer} onChange={handleInputChange} />
            <div> {checkAnswer()} </div>
        </div>
    );
}
