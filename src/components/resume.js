import React from 'react';
import { Accordion, ListGroup } from "react-bootstrap";

const Resume = () => {

    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Expertise</Accordion.Header>
                <Accordion.Body>
                <strong>Tech-savvy individual with proficiency in leveraging software engineering expertise in designing and delivering backend/frontend
                applications to the client for wargaming scenarios.</strong>
                <p>
                Demonstrated ability to ensure API/ frontends development for internal tools. Well-versed in planning and executing unit and interface
                tests using Pytest and Selenium. Capable of conducting code reviews on components and applications to ensure adherence to the
                development standards. Well-versed in developing back-end components, connecting applications with other web services, supporting
                front-end developers, writing reusable, testable, and efficient codes.
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                    B.S Computer Science - <b>University of Texas at El Paso, 2019</b>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Career Experience</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        <ListGroup.Item>
                            <h6>Alternative Experts, Dumfries VA 2019 – 2021</h6>
                            <b>Junior Software Engineer/Data Scientist</b>
                            <p>Technologies Used: Python, Django, SQL, PostgreSQL, Javascript/Typescript, Angular, Django Rest Framework, Docker, Git</p>
                            
                            <p>
                                Delivered subject matter expertise while developing web application and API for govt. clients. Developed account management
                                system for web app. Leveraged software engineering expertise in designing and delivering backend/frontend application for the client,
                                using for wargaming scenarios. Achieved high code coverage using pytest, while conducting unit tests. Planned and executed interface
                                tests using Selenium. Developed and ensured user authentication via using OAuth.
                            </p>
                            <ul>
                                <li>Succeeded in creating, designing, and delivering web application used by multiple users.</li>
                                <li>Planned and conducted unit tests with at least 50% code coverage.</li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Virtual Student Federal Service, Virtual 2018-2019</h6>
                            <b>Intern</b>
                            <p>Technologies Used: Javascript, NodeJS</p>
                            <ul>
                                <li>Built and designed Google assistant application to save users’ energy costs.</li>
                                <li>Worked with dept. of energy web developer to develop chatbot and wiki articles on machine learning.</li>
                            </ul>
                        </ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Technical Proficiencies</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        <ListGroup.Item>Machine Learning</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Machine Learning</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Typescript</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Angular</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>Django</ListGroup.Item>
                        <ListGroup.Item>SQL</ListGroup.Item>
                        <ListGroup.Item>PostgreSQL</ListGroup.Item>
                        <ListGroup.Item>Docker</ListGroup.Item>
                        <ListGroup.Item>Git</ListGroup.Item>
                        <ListGroup.Item>NodeJS</ListGroup.Item>
                        <ListGroup.Item>Java</ListGroup.Item>
                        <ListGroup.Item>C</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
    );
}

export default Resume;
