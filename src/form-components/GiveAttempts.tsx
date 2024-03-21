import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttemptsNum] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>

            <span> Current attempts: {attempts}</span>
            <Form.Group controlId="Wanted Attempts">
                {" "}
                <Form.Label>Attempts:</Form.Label>{" "}
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsNum(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => setAttemptsNum(attemptsRequested + attempts)}
            >
                gain
            </Button>
        </div>
    );
}
