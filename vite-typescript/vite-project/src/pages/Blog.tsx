import type { ReactNode } from "react";
import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { Helmet } from "react-helmet";

const Blog = (): ReactNode => {
    return (
        <Container>
        <Helmet>
        <title>Блог</title>
          <meta name="description" content="Блог"></meta>
          <meta name="keywords" content="Основной блог"></meta>
        </Helmet>
            <div className="flex gap-4">
                <Text color="primary" size="large" title="Hello, world!" />
            </div>
        </Container>
    );
};

export default Blog;