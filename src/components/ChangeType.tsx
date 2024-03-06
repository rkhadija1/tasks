import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const QuestionType: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question"
    ];
    const [questionType, setQestionType] = useState<QuestionType>(
        QuestionType[0]
    );
    function ChangeType(): void {
        questionType === "multiple_choice_question"
            ? setQestionType("short_answer_question")
            : setQestionType("multiple_choice_question");
    }
    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            {questionType === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
}
