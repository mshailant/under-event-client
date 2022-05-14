import React from "react";
import { Col, Row, Card, Container, CardGroup } from "react-bootstrap"
import { BsGithub } from "react-icons/bs"


export default function AboutUsCard({ name, birthDay, description, image, github }){
    return(
        <div>
            <Row xs={1} md={5} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Container>
                    <Row>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text>
                                {birthDay}
                            </Card.Text>
                            <Card.Text>
                            <a href={"https://github.com/" + github}>
                                <BsGithub/>
                            </a>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            ))}
            </Row>
        </div>
    )
}
