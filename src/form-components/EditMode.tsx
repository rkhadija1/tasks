/* eslint-disable prettier/prettier */
import React, { HTMLInputTypeAttribute, useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function createBoxandCheck() {
        return (
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Student"
                    checked={isStudent}
                    onChange={updateStudent}
                ></Form.Check>

                <Form.Group>
                    <Form.Control
                        type="textbox"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                </Form.Group>
            </div>
        );
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit"
                label="Edit Mode"
                checked={edit}
                onChange={updateEdit}
            ></Form.Check>

            {edit === true ? createBoxandCheck() : <span></span>}

            {isStudent === true ? (
                <span>{name } is a student</span>
            ) :
                <span>{name } is not a student</span>}
        </div>
    );
}
