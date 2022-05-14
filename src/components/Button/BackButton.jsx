import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Button } from "react-bootstrap"

export default function BackButton(){
    return(
        <div>
            <LinkContainer to="/">
                <Button variant="outline-warning">Volver</Button>
            </LinkContainer>
        </div>
    )
}
