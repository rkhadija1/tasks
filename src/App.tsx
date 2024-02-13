import React from "react";
import "./App.css";
import image1 from "./Images/Bridge.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1></h1>
            <img src={image1} alt="A picture of Brooklyn bridge at night" />
            <ul>
                <li>element 1</li>
                <li>element 2</li>
                <li>element 3</li>
                <li>element 4</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 600,
                                height: 300,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 600,
                                height: 300,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Khadija Mohammadi</p>
            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
