import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export type ConceptContentInput = {
  title: string;
  description: string;
  url: string;
};

export const ConceptContent = ({
  title,
  description,
  url,
}: ConceptContentInput) => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <div className="section-title-container section-title--one section-title--concept space-mb--r130">
            <h1>{title}</h1>
            <p>{description}</p>
            <Link href={url} as={url} className="amrc-button-2">
              Art Gallery
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
