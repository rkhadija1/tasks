import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptNum, setAttemptNum] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setQuizInProgress(!quizInProgress);
        setAttemptNum(attemptNum - 1);
    }
    function stopQuiz(): void {
        setQuizInProgress(!quizInProgress);
    }
    function mulligan(): void {
        setAttemptNum(attemptNum + 1);
    }
    return (
        <div>
            <Button
                onClick={() => startQuiz()}
                disabled={quizInProgress === true || attemptNum == 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => stopQuiz()}
                disabled={quizInProgress === false}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => mulligan()}
                disabled={quizInProgress === true}
            >
                Mulligan
            </Button>
            <div>{attemptNum}</div>
        </div>
    );
}
