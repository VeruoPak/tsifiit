import type { ReactNode } from "react";
import { Container } from "../components/Container";
import { Text } from "../components/Text";

const Blog = (): ReactNode => {
    return (
        <Container>
            <div className="flex gap-4">
                <Text color="primary" size="large" title="Hello, world!" />
            </div>
        </Container>
    );
};

export default Blog;