import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateQuestion(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                name="choice"
                onChange={updateQuestion}
                id="multiple-choice-question-answer-matched"
                value={choice}

            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {choice === expectedAnswer ? <span> ✔️ </span> : <span> ❌ </span>}
        </div>
    );
}
