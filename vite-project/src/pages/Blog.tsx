import React, { ReactNode } from "react";
import { Component } from "react";
import {Container} from "../components/Container"
import {Text} from "../components/Text"

export default class Blog extends Component {
    render() : ReactNode {
        return (
            <Container>
            <div className="flex gap-4">
                <Text color="primary" size="large" title="Hello, world!"/>
            </div> 
            </Container>
        );
    }
}

